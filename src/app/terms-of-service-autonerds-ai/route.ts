import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(
    new URL("/Terms%20of%20Service-AutoNerds%20AI.pdf", request.url)
  );
}

// https://yeahscene.com/terms-of-service-autonerds-ai

// https://yeahscene.com/privacy-policy-autonerds-ai