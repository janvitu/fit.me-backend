//validate date format yyyy-mm-dd hh:mm:ss
export function validateDate(date) {
  const reg = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
  return reg.test(date);
}
