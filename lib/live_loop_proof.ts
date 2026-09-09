/** Temporary file for live GitHub loop proof. Remove after verification. */

export function average(values: number[]): number {
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  // Bug: empty array yields NaN and callers may not expect it.
  return sum / values.length;
}
