import { pathToFileURL } from "node:url";
import { runHealthCheck } from "./public-health.mjs";
import { recordObservation } from "./public-health-state.mjs";

export async function monitorOnce(statePath) {
  return recordObservation(await runHealthCheck(), { statePath });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (process.argv.length !== 4 || process.argv[2] !== "--state" || !process.argv[3].trim()) {
    console.error("Usage: node scripts/public-health-monitor.mjs --state <local-state-file>");
    process.exitCode = 2;
  } else {
    try {
      const result = await monitorOnce(process.argv[3]);
      console.log(JSON.stringify(result, null, 2));
      if (!result.ok) process.exitCode = 1;
    } catch (error) {
      const allowed = new Set(["state_locked", "invalid_state", "invalid_observation", "observation_not_newer", "state_path_required"]);
      console.error(JSON.stringify({ ok: false, error: allowed.has(error.message) ? error.message : "state_io_failed", notificationSent: false }));
      process.exitCode = 2;
    }
  }
}
