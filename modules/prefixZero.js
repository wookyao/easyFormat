export default function prefixZero(num, n) {
  if(isNaN(num)) return 0;
  if(n <= num.toString().length) return num.toString()
  let sign = num == (num = Math.abs(num));
  let ret = (Array(n).join(0) + num).slice(-n);
  if(!sign) {
    ret = '-' + ret
  }
  return ret;
}