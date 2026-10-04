const compact = new Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 3,
  notation: "compact",
});

const full = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1,
});

export default (num: number) => compact.format(num);

export const formatFull = (num: number) => full.format(num);

/** A fractional change as a whole percent, e.g. "+7%"; no sign when it rounds to 0. */
export const formatChange = (change: number, up = "+", down = "−") => {
  const percent = Math.round(change * 100);
  if (percent === 0) return "0%";
  return `${percent > 0 ? up : down}${Math.abs(percent)}%`;
};
