/** Demo case 1: simple correctness bug for three-real-pr-demo (2026-09-10). */

export function averagePositive(values: number[]): number {
  let sum = 0;
  let count = 0;
  for (const value of values) {
    if (value > 0) {
      sum += value;
      count += 1;
    }
  }
  // Bug: no guard when every value is non-positive; count stays 0.
  return sum / count;
}
