const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default formatter;
