/**
   * 将对象解析成url参数
   * @param  {object} obj 参数对象
   * @param  {boolean} unEncodeURI 不使用编码
   * @return {string} 转换之后的url参数
   */
export function param(obj = {}, unEncodeURI) {
  let result = [];

  for (let name of Object.keys(obj)) {
    let value = obj[name];

    result.push(
      name + "=" + (unEncodeURI ? value : encodeURIComponent(value))
    );
  }

  if (result.length) {
    return "?" + result.join("&");
  } else {
    return "";
  }
}
/**
 * 将url参数解析成对象
 * @param  {string} str 带url参数的地址
 * @param  {boolean} unDecodeURI 不使用解码
 * @param  {string} separator 分隔符
 * @return {object} 转换之后的url参数
 */
export function unparam(str = "", unDecodeURI, separator = "&") {
  let result = {};
  let range = str.split("?");
  let query = range[1] || "";

  query = query.split("#")[0]; // clear hash

  if (!query) return result;

  let arr = query.split(separator);

  arr.forEach((item, idx) => {
    let param = item.split("=");
    let name = param[0];
    let value = param[1] || "";

    if (name) {
      result[name] = unDecodeURI ? value : decodeURIComponent(value);
    }
  });

  return result;
}