const compact = new Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 3,
  notation: "compact",
});

const full = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1,
});

export default (num: number) => compact.format(num);

export const formatFull = (num: number) => full.format(num);
