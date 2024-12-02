const nf = new Intl.NumberFormat("en-US");

export default (num: number) => nf.format(num);
