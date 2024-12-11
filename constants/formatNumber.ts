const nf = new Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 3,
  notation: "compact",
});

export default (num: number) => nf.format(num);
