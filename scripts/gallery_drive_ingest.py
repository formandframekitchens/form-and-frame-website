#!/usr/bin/env python3
import hashlib
import json
import os
import sys
import tempfile
from pathlib import Path

import requests
from PIL import Image, ImageOps

try:
    import pillow_avif  # noqa: F401
except Exception:
    pillow_avif = None

MANIFEST = Path(os.environ.get("GALLERY_JOB_MANIFEST", "docs/gallery/image-jobs/current.json"))
OUT_ROOT = Path("public/images/gallery")
REPORT_ROOT = Path("docs/gallery/image-jobs/results")
MAX_DOWNLOAD_BYTES = 100 * 1024 * 1024


def fail(message: str) -> None:
    raise RuntimeError(message)


def git_blob_sha(path: Path) -> str:
    data = path.read_bytes()
    header = f"blob {len(data)}\0".encode()
    return hashlib.sha1(header + data).hexdigest()


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def download_with_url(url: str, destination: Path) -> None:
    with requests.get(url, stream=True, timeout=(20, 120), allow_redirects=True) as r:
        r.raise_for_status()
        total = 0
        with destination.open("wb") as f:
            for chunk in r.iter_content(1024 * 1024):
                if not chunk:
                    continue
                total += len(chunk)
                if total > MAX_DOWNLOAD_BYTES:
                    fail(f"Download exceeded {MAX_DOWNLOAD_BYTES} bytes")
                f.write(chunk)
    if destination.stat().st_size == 0:
        fail("Downloaded file is empty")


def drive_authorized_session():
    raw = os.environ.get("GOOGLE_DRIVE_SERVICE_ACCOUNT_JSON", "").strip()
    if not raw:
        return None
    from google.oauth2 import service_account
    from google.auth.transport.requests import AuthorizedSession

    try:
        info = json.loads(raw)
    except json.JSONDecodeError as exc:
        fail(f"GOOGLE_DRIVE_SERVICE_ACCOUNT_JSON is not valid JSON: {exc}")
    credentials = service_account.Credentials.from_service_account_info(
        info,
        scopes=["https://www.googleapis.com/auth/drive.readonly"],
    )
    return AuthorizedSession(credentials)


def download_drive_file(file_id: str, destination: Path, session) -> None:
    if session is None:
        fail(
            "No Drive credential is available. Configure GOOGLE_DRIVE_SERVICE_ACCOUNT_JSON "
            "or provide a temporary source_url in the manifest for a one-off validation run."
        )
    url = f"https://www.googleapis.com/drive/v3/files/{file_id}?alt=media&supportsAllDrives=true"
    with session.get(url, stream=True, timeout=(20, 120)) as r:
        r.raise_for_status()
        total = 0
        with destination.open("wb") as f:
            for chunk in r.iter_content(1024 * 1024):
                if not chunk:
                    continue
                total += len(chunk)
                if total > MAX_DOWNLOAD_BYTES:
                    fail(f"Drive file {file_id} exceeded {MAX_DOWNLOAD_BYTES} bytes")
                f.write(chunk)
    if destination.stat().st_size == 0:
        fail(f"Drive file {file_id} downloaded as an empty file")


def validate_and_load(path: Path) -> Image.Image:
    try:
        with Image.open(path) as probe:
            probe.verify()
        with Image.open(path) as source:
            source.load()  # catches truncated/corrupt streams
            image = ImageOps.exif_transpose(source).convert("RGB")
    except Exception as exc:
        fail(f"Image validation failed for {path.name}: {exc}")
    if image.width < 600 or image.height < 600:
        fail(f"Image {path.name} is too small: {image.width}x{image.height}")
    return image


def resized_copy(image: Image.Image, long_edge: int) -> Image.Image:
    out = image.copy()
    if max(out.size) > long_edge:
        scale = long_edge / max(out.size)
        out = out.resize(
            (max(1, round(out.width * scale)), max(1, round(out.height * scale))),
            Image.Resampling.LANCZOS,
        )
    return out


def save_under_target(image: Image.Image, path: Path, fmt: str, start_quality: int,
                      target_bytes: int, min_quality: int, min_long_edge: int) -> dict:
    long_edge = max(image.size)
    quality = start_quality
    candidate = resized_copy(image, long_edge)

    while True:
        save_kwargs = {"quality": quality}
        if fmt == "WEBP":
            save_kwargs.update({"method": 6, "exif": b""})
        elif fmt == "AVIF":
            save_kwargs.update({"exif": b""})
        candidate.save(path, fmt, **save_kwargs)
        size = path.stat().st_size
        if size <= target_bytes:
            return {
                "bytes": size,
                "quality": quality,
                "width": candidate.width,
                "height": candidate.height,
            }
        if quality > min_quality:
            quality = max(min_quality, quality - 4)
            continue
        current_long = max(candidate.size)
        if current_long <= min_long_edge:
            fail(f"Could not compress {path.name} below {target_bytes} bytes without crossing quality floor")
        next_long = max(min_long_edge, int(current_long * 0.9))
        candidate = resized_copy(image, next_long)
        quality = start_quality


def main() -> int:
    if not MANIFEST.exists():
        fail(f"Manifest not found: {MANIFEST}")
    job = json.loads(MANIFEST.read_text())

    if job.get("schema_version") != 1:
        fail("Unsupported manifest schema_version; expected 1")
    slug = str(job.get("slug", "")).strip()
    project = str(job.get("project", "")).strip()
    images = job.get("images")
    if not slug or not project or not isinstance(images, list) or not images:
        fail("Manifest requires project, slug and a non-empty images array")

    max_long_edge = int(job.get("max_long_edge", 2000))
    min_long_edge = int(job.get("min_long_edge", 1200))
    webp_quality = int(job.get("webp_quality", 84))
    avif_quality = int(job.get("avif_quality", 58))
    webp_target = int(job.get("webp_target_bytes", 500000))
    avif_target = int(job.get("avif_target_bytes", 400000))

    out_dir = OUT_ROOT / slug
    out_dir.mkdir(parents=True, exist_ok=True)
    REPORT_ROOT.mkdir(parents=True, exist_ok=True)
    session = drive_authorized_session()

    report = {
        "schema_version": 1,
        "project": project,
        "slug": slug,
        "source_manifest": str(MANIFEST),
        "images": [],
    }

    with tempfile.TemporaryDirectory(prefix="gallery-ingest-") as td:
        td = Path(td)
        for idx, item in enumerate(images, start=1):
            file_id = str(item.get("drive_file_id", "")).strip()
            stem = str(item.get("output_stem", "")).strip()
            source_url = str(item.get("source_url", "")).strip()
            if not file_id or not stem:
                fail(f"Image {idx} requires drive_file_id and output_stem")
            if "/" in stem or "\\" in stem or stem.startswith("."):
                fail(f"Unsafe output_stem: {stem}")

            source = td / f"source-{idx}"
            print(f"INGEST {idx}/{len(images)} drive_file_id={file_id} -> {stem}")
            if source_url:
                download_with_url(source_url, source)
            else:
                download_drive_file(file_id, source, session)

            image = validate_and_load(source)
            original_width, original_height = image.size
            image = resized_copy(image, max_long_edge)

            webp_path = out_dir / f"{stem}.webp"
            avif_path = out_dir / f"{stem}.avif"
            webp = save_under_target(image, webp_path, "WEBP", webp_quality, webp_target, 64, min_long_edge)
            avif = save_under_target(image, avif_path, "AVIF", avif_quality, avif_target, 42, min_long_edge)

            entry = {
                "drive_file_id": file_id,
                "source_label": item.get("source_label"),
                "role": item.get("role"),
                "original": {"width": original_width, "height": original_height},
                "webp": {
                    "path": str(webp_path),
                    **webp,
                    "sha256": sha256(webp_path),
                    "git_blob_sha": git_blob_sha(webp_path),
                },
                "avif": {
                    "path": str(avif_path),
                    **avif,
                    "sha256": sha256(avif_path),
                    "git_blob_sha": git_blob_sha(avif_path),
                },
            }
            report["images"].append(entry)
            print(
                f"OK {stem}: WEBP {webp['width']}x{webp['height']} {webp['bytes']} bytes; "
                f"AVIF {avif['width']}x{avif['height']} {avif['bytes']} bytes"
            )

    report_path = REPORT_ROOT / f"{slug}.json"
    report_path.write_text(json.dumps(report, indent=2) + "\n")
    print(f"REPORT {report_path}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"FUSE STOP: {exc}", file=sys.stderr)
        raise SystemExit(1)
