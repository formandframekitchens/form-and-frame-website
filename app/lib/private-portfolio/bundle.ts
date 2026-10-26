import type { PrivateAsset, PrivatePhoto, PrivateProject } from "./catalogue";
import type { ProjectStory } from "./stories";

export type PrivateBundle = { schemaVersion: 1; projects: PrivateProject[]; assets: Record<string, PrivateAsset>; stories: Record<string, ProjectStory> };
export const MAX_BUNDLE_BYTES = 2 * 1024 * 1024;
const fail = () => { throw new Error("Invalid private portfolio bundle"); };
const object = (value: unknown): Record<string, unknown> => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return fail();
  return value as Record<string, unknown>;
};
const text = (value: unknown, max = 12_000): string => typeof value === "string" && value.length <= max && !/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value) ? value : fail();
const id = (value: unknown): string => /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,160}$/.test(text(value, 161)) && !["constructor", "prototype", "__proto__"].includes(String(value)) ? String(value) : fail();
const number = (value: unknown, max = 100_000): number => typeof value === "number" && Number.isFinite(value) && value > 0 && value <= max ? value : fail();
const array = (value: unknown, max = 500): unknown[] => Array.isArray(value) && value.length <= max ? value : fail();
const entries = (value: unknown, max = 10_000) => { const result = Object.entries(object(value)); if (result.length > max) fail(); return result; };
const photo = (value: unknown): PrivatePhoto => { const v = object(value); return { id: id(v.id), thumbnail: id(v.thumbnail), alt: text(v.alt, 1000), width: number(v.width), height: number(v.height) }; };
const path = (value: unknown): string => {
  const result = text(value, 500);
  if (!result || result.startsWith("/") || /[\\:%?#\r\n]/.test(result) || result.split("/").some(part => !part || part === "." || part === "..")) fail();
  return result;
};

export function parsePrivateBundle(value: unknown): PrivateBundle {
  const v = object(value);
  if (v.schemaVersion !== 1) fail();
  const assets: Record<string, PrivateAsset> = Object.create(null);
  for (const [key, raw] of entries(v.assets)) {
    const a = object(raw); const file = text(a.file, 200);
    if (!/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/.test(file) || !["image", "video"].includes(String(a.kind))) fail();
    if (!(a.kind === "video" ? /\.mp4$/i : /\.webp$/i).test(file)) fail();
    assets[id(key)] = { file, pathname: path(a.pathname), kind: String(a.kind), width: number(a.width), height: number(a.height), bytes: number(a.bytes, 2_000_000_000) };
    if (!Number.isSafeInteger(a.bytes)) fail();
  }
  const projects = array(v.projects, 100).map(raw => {
    const p = object(raw);
    return { slug: id(p.slug), title: text(p.title, 500), category: text(p.category, 300), summary: text(p.summary), cover: photo(p.cover), photos: array(p.photos).map(photo), workshopPhotos: array(p.workshopPhotos).map(photo), videos: array(p.videos, 100).map(rawFilm => {
      const f = object(rawFilm); return { id: id(f.id), poster: id(f.poster), title: text(f.title, 500), quality: text(f.quality, 100), duration: number(f.duration, 86_400), width: number(f.width), height: number(f.height) };
    }) };
  });
  const slugs = new Set(projects.map(p => p.slug));
  if (slugs.size !== projects.length) fail();
  for (const p of projects) {
    for (const img of [p.cover, ...p.photos, ...p.workshopPhotos]) {
      if (assets[img.id]?.kind !== "image" || assets[img.thumbnail]?.kind !== "image") fail();
    }
    for (const film of p.videos) if (assets[film.id]?.kind !== "video" || assets[film.poster]?.kind !== "image") fail();
  }
  const stories: Record<string, ProjectStory> = Object.create(null);
  for (const [key, raw] of entries(v.stories, 100)) {
    if (!slugs.has(key)) fail();
    const s = object(raw);
    const story: ProjectStory = { introduction: text(s.introduction), scope: array(s.scope, 100).map(raw => { const item = object(raw); return { label: text(item.label, 500), value: text(item.value) }; }), sections: array(s.sections, 100).map(raw => { const item = object(raw); return { heading: text(item.heading, 500), paragraphs: array(item.paragraphs, 100).map(p => text(p)) }; }) };
    if (s.photoCaptions !== undefined) story.photoCaptions = Object.fromEntries(entries(s.photoCaptions, 1000).map(([key, val]) => [id(key), text(val)]));
    for (const optional of ["process", "gallery"] as const) if (s[optional] !== undefined) {
      const item = object(s[optional]); const flag = optional === "process" ? "landscape" : "first";
      if (typeof item[flag] !== "boolean") fail();
      const common = { title: text(item.title, 500), description: text(item.description) };
      if (optional === "process") story.process = { ...common, landscape: item[flag] as boolean };
      else story.gallery = { ...common, first: item[flag] as boolean };
    }
    stories[id(key)] = story;
  }
  return { schemaVersion: 1, projects, assets, stories };
}

export async function readBundleStream(stream: ReadableStream<Uint8Array>, signal: AbortSignal): Promise<PrivateBundle> {
  const reader = stream.getReader(); const parts: Uint8Array[] = []; let bytes = 0;
  const abort = () => { void reader.cancel().catch(() => {}); };
  signal.addEventListener("abort", abort, { once: true });
  try {
    signal.throwIfAborted();
    for (;;) {
      const part = await reader.read(); signal.throwIfAborted();
      if (part.done) break;
      bytes += part.value.byteLength;
      if (bytes > MAX_BUNDLE_BYTES) { await reader.cancel(); return fail(); }
      parts.push(part.value);
    }
    const merged = new Uint8Array(bytes); let offset = 0;
    for (const part of parts) { merged.set(part, offset); offset += part.byteLength; }
    return parsePrivateBundle(JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(merged)));
  } finally { signal.removeEventListener("abort", abort); reader.releaseLock(); }
}

export type PortfolioResult = { status: "unauthorized" | "unavailable" } | { status: "available"; data: PrivateBundle };
export async function resolvePrivatePortfolio(options: { authorized: boolean; environment?: string; cataloguePath?: string; fixture: PrivateBundle; read: (path: string, signal: AbortSignal) => Promise<PrivateBundle>; timeoutMs?: number }): Promise<PortfolioResult> {
  if (!options.authorized) return { status: "unauthorized" };
  if (!options.environment || ["preview", "development", "test"].includes(options.environment)) return { status: "available", data: options.fixture };
  if (options.environment !== "production") return { status: "unavailable" };
  if (!/^private-portfolio\/catalogue\/[a-zA-Z0-9_-]+\.json$/.test(options.cataloguePath ?? "")) return { status: "unavailable" };
  const controller = new AbortController();
  let timer: ReturnType<typeof setTimeout>;
  const deadline = new Promise<never>((_, reject) => {
    timer = setTimeout(() => { controller.abort(); reject(new Error("Portfolio unavailable")); }, options.timeoutMs ?? 6000);
  });
  try {
    const data = await Promise.race([options.read(options.cataloguePath!, controller.signal), deadline]);
    controller.signal.throwIfAborted();
    return { status: "available", data };
  } catch { return { status: "unavailable" }; }
  finally { clearTimeout(timer!); }
}

// One short-lived server-memory entry avoids re-reading the catalogue for each
// authenticated image request. Authorization is checked before this reader runs.
export function cacheBundleReader(read: (path: string, signal: AbortSignal) => Promise<PrivateBundle>, now = Date.now) {
  let entry: { path: string; expiresAt: number; data: PrivateBundle } | undefined;
  return async (path: string, signal: AbortSignal) => {
    signal.throwIfAborted();
    if (entry?.path === path && entry.expiresAt > now()) return entry.data;
    const data = await read(path, signal);
    signal.throwIfAborted();
    entry = { path, expiresAt: now() + 60_000, data };
    return data;
  };
}
