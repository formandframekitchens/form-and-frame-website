import { privateHeaders } from "@/app/lib/private-portfolio/auth";
export async function POST() { return new Response("Please sign in at /private-case-studies.", { status: 410, headers: privateHeaders }); }
