import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(
    new URL("/Terms%20of%20Service-AutoNerds%20AI.pdf", request.url)
  );
}
