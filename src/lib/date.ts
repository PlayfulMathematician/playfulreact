export function rankDDMMYY(s: string): number {
  const [dd, mm, yy] = s.split("-").map(Number);
  return yy * 10000 + mm * 100 + dd;
}
