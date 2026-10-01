from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ROOT = Path("incoming/gallery")
OUT_ROOT = Path("public/images/gallery")
TARGET = (1800, 1350)
TARGET_RATIO = 4 / 3
RATIO_TOLERANCE = 0.015
VALID = {".jpg", ".jpeg", ".png"}

if not ROOT.exists():
    raise SystemExit("No incoming gallery directory.")

processed = 0
for source in sorted(ROOT.rglob("*")):
    if not source.is_file() or source.suffix.lower() not in VALID:
        continue

    project = source.parent.relative_to(ROOT)
    destination_dir = OUT_ROOT / project
    destination_dir.mkdir(parents=True, exist_ok=True)
    destination = destination_dir / f"{source.stem}.webp"

    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        ratio = image.width / image.height

        if abs(ratio - TARGET_RATIO) > RATIO_TOLERANCE:
            raise RuntimeError(
                f"{source} is {image.width}x{image.height} ({ratio:.3f}), not safe for automatic 4:3 processing. "
                "Crop/outpaint this photograph manually before re-running."
            )

        image = image.resize(TARGET, Image.Resampling.LANCZOS)
        image = ImageEnhance.Brightness(image).enhance(1.06)
        image = ImageEnhance.Contrast(image).enhance(1.03)
        image = image.filter(ImageFilter.UnsharpMask(radius=1.0, percent=65, threshold=3))
        image.save(destination, "WEBP", quality=82, method=6, exif=b"")

    source.unlink()
    processed += 1
    print(f"{destination}: {destination.stat().st_size} bytes")

# Remove empty incoming directories from deepest to shallowest.
for directory in sorted((p for p in ROOT.rglob("*") if p.is_dir()), reverse=True):
    try:
        directory.rmdir()
    except OSError:
        pass

print(f"Processed {processed} gallery image(s).")
