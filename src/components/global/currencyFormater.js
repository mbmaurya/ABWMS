const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export default formatter;
