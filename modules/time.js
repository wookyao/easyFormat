function formatTime(value, format = 'YYYY/MM/DD hh:mm:ss') {
  let nowDate = new Date(value);
  if(/Invalid|NaN/.test(nowDate.toString())) {
    throw new Error('dateTime is error format')
    return ''
  }
  let weeks = ['日', '一', '二', '三', '四', '五', '六'];
  let time = new Date(+nowDate + 8 * 3600 * 1000)
    .toISOString()
    .substr(0, 19)
    .replace(/[a-z]/i, ' ');
  let [
    _,
    YYYY,
    MM,
    DD,
    hh,
    mm,
    ss,
  ] = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/g.exec(time);
  var filterTime = (type, _) => type.slice(0, _.length);
  return format
    .replace(/(Y{1,4})/g, $1 => filterTime(YYYY, $1))
    .replace(/(M{1,2})/g, $1 => filterTime(MM, $1))
    .replace(/(D{1,2})/g, $1 => filterTime(DD, $1))
    .replace(/(h{1,2})/g, $1 => filterTime(hh, $1))
    .replace(/(m{1,2})/g, $1 => filterTime(mm, $1))
    .replace(/(s{1,2})/g, $1 => filterTime(ss, $1))
    .replace(/(W{1})/g, $1 => weeks[nowDate.getDay()])
    .replace(/(Q{1})/g, $1 => Math.floor((nowDate.getMonth() + 3) / 3));
}

export default formatTime