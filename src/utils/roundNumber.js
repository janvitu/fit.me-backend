export function roundNumber(num, decimals) {
  if (!decimals) {
    return Math.round(num);
  }
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
