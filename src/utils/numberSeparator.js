export const numberSeparator = (number) => {
  if (!number) return "";
  let str = number.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
};
