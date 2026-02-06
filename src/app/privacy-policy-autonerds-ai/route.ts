import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(
    new URL("/Privacy%20policy-AutonNerds%20AI.pdf", request.url)
  );
}
