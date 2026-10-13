// Regenerate website brand assets from the same outlines used by Wordmark.
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const brand = JSON.parse(await readFile(new URL("../app/lib/brand-artwork.json", import.meta.url), "utf8"));
const root = new URL("../", import.meta.url);
const mark = `<path d="${brand.mark.rails}"/><path d="${brand.mark.seam}"/><path d="${brand.mark.doors}"/><path d="${brand.mark.handles}" fill="${brand.gold}"/>`;
const { x, y, width, height } = brand.layout.divider;
const lockup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${brand.viewBox}" width="720" height="160" role="img" aria-labelledby="title desc"><title id="title">Form &amp; Frame Kitchens</title><desc id="desc">Mirrored F wardrobe mark beside the owner's outlined wordmark, gold divider and Kitchens lettering</desc><rect width="576" height="128" fill="#fff"/><g fill="${brand.ink}"><g transform="${brand.layout.markTransform}">${mark}</g><path d="${brand.wordmark.path}" transform="${brand.layout.wordmarkTransform}" fill-rule="evenodd"/><rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${brand.dividerGold}"/><path d="${brand.subtitle.path}" transform="${brand.layout.subtitleTransform}" fill-rule="evenodd"/></g></svg>\n`;
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128"><title>Form &amp; Frame wardrobe mark</title><rect width="128" height="128" fill="#fff"/><g fill="${brand.ink}" transform="translate(14 7)">${mark}</g></svg>\n`;
await writeFile(new URL("public/brand/form-and-frame-lockup.svg", root), lockup);
await writeFile(new URL("public/brand/form-and-frame-mark.svg", root), icon);
await writeFile(new URL("public/brand/form-and-frame-lockup.png", root), await sharp(Buffer.from(lockup)).resize(1440, 320).png().toBuffer());
for (const [file, size] of [["app/icon.png", 192], ["app/apple-icon.png", 180]]) {
  await writeFile(new URL(file, root), await sharp(Buffer.from(icon)).resize(size, size).png().toBuffer());
}
const sizes = [16, 32, 48, 64, 128, 256];
const frames = await Promise.all(sizes.map(size => sharp(Buffer.from(icon)).resize(size, size).png().toBuffer()));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
frames.forEach((frame, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index] % 256;
  directory[entry + 1] = sizes[index] % 256;
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(frame.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await writeFile(new URL("app/favicon.ico", root), Buffer.concat([directory, ...frames]));
console.log("Rendered lockup SVG/1440×320 PNG, mark SVG, 192px/180px icons and six-size favicon from shared outlines.");
