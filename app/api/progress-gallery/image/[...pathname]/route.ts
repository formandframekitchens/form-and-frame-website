import { privateHeaders } from "@/app/lib/private-portfolio/auth";
// Retired URLs must not provide an alternative route to private media.
export async function GET() { return new Response("Not found", { status: 404, headers: privateHeaders }); }
