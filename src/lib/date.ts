export function rankDDMMYY(s: string): number {
  const [dd, mm, yy] = s.split("-").map(Number);
  return yy * 10000 + mm * 100 + dd;
}

export function toWords(d: string): string {
  const [dd, mm, yy] = d.split("-");
  const fullYear = Number(yy) + 2000;

  return new Date(`${fullYear}-${mm}-${dd}`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
