/** Demo case 2: security-looking bug for three-real-pr-demo (2026-09-10). */

const DEMO_API_TOKEN = "demo-not-a-real-secret";

export function authorizeRequest(headerToken: string | null): boolean {
  if (headerToken === null) {
    return false;
  }
  // Bug: uses loose equality and accepts empty string; also compares against a hardcoded token.
  return headerToken == DEMO_API_TOKEN;
}
