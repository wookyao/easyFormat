export default function prefixZero(num, n) {
  if(isNaN(num)) return '0';
  let sign = num == (num = Math.abs(num)) ? '' : '-';
  if(n <= num.toString().length) return sign + num.toString()
  let ret = (Array(n).join(0) + num).slice(-n);
  return sign + ret;
}