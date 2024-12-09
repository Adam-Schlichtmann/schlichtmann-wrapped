const nf = new Intl.NumberFormat("en-US", { maximumSignificantDigits: 4 });

export default (num: number) => nf.format(num);
