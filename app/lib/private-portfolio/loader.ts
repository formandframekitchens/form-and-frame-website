import "server-only";
import { get } from "@vercel/blob";
import { isPrivateAuthorized } from "./auth";
import { privateAssets, privateProjects } from "./catalogue";
import { privateProjectStories } from "./stories";
import { MAX_BUNDLE_BYTES, cacheBundleReader, readBundleStream, resolvePrivatePortfolio } from "./bundle";

const readCatalogue = cacheBundleReader(async (pathname, abortSignal) => {
  const result = await get(pathname, { access: "private", abortSignal });
  if (!result || result.statusCode !== 200) throw new Error("Portfolio unavailable");
  if (result.blob.size > MAX_BUNDLE_BYTES || !/^application\/json(?:;|$)/i.test(result.blob.contentType)) {
    await result.stream.cancel(); throw new Error("Portfolio unavailable");
  }
  return readBundleStream(result.stream, abortSignal);
});

export async function getPrivatePortfolio() {
  return resolvePrivatePortfolio({
    authorized: await isPrivateAuthorized(),
    environment: process.env.VERCEL_ENV ?? (process.env.VERCEL ? "unknown" : "development"),
    cataloguePath: process.env.PRIVATE_PORTFOLIO_CATALOGUE_PATH,
    fixture: { schemaVersion: 1, projects: privateProjects, assets: privateAssets, stories: privateProjectStories },
    read: readCatalogue,
  });
}
