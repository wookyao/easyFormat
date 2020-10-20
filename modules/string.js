import { isString, isEmpty, isRegExp, isNumber } from './_types';

/**
 * 根据位置,使用 【占位符】 遮蔽字符串
 * @param {String} str          目标元素
 * @param {Number} start        开始位置下标(包含)
 * @param {Number} maskLen      遮蔽长度
 * @param {String} _placeholder 占位符
 * @example mask('15256936283', 3, 4) => '152****6283'
 */
export const mask = (str, start = 0, maskLen = 0, _placeholder = '*') => {
  if (!isString(str) || isEmpty(str)) {
    return -1;
  }
  let replaceStr = str.substring(start, maskLen + start);
  let placeholders = Array(replaceStr.length)
    .fill(_placeholder)
    .join('');
  return str.replace(replaceStr, placeholders);
};

/**
 * 从左侧开始遮蔽元素
 * @param {String} str
 * @param {Number} maskLeng
 * @param {String} _placeholder
 * @example maskLeft('15256936283', 4) => '****6936283'
 */
export const maskLeft = (str, maskLeng, _placeholder = '*') => {
  return mask(str, 0, maskLeng, _placeholder);
};

/**
 * 从右侧开始遮蔽元素
 * @param {String} str
 * @param {Number} maskLeng
 * @param {String} _placeholder
 * @example maskRight('15256936283', 4) => '1525693****'
 */
export const maskRight = (str, maskLeng, _placeholder = '*') => {
  return mask(str, str.length - maskLeng, maskLeng, _placeholder);
};

/**
 * 清除空格
 * @param {String} str
 * @param {String} type
 * trim(str,
 * 'all(清除所有空格)|
 * lr(清除两端空格)|
 * left(清除左侧空格)|
 * right(清除右侧空格)|
 * reg(自定义清除规则)')
 */
export const trim = (str, type = 'lr') => {
  if (!isString(str) && !isNumber(str)) return -1;
  const regMaps = {
    all: /\s+/g,
    lr: /(^\s*)|(\s*$)/g,
    left: /(^\s*)/g,
    right: /(\s*$)/g,
  };
  let reg = regMaps.lr;
  if (regMaps.hasOwnProperty(type)) {
    reg = regMaps[type];
  } else if (isRegExp(type)) {
    reg = type;
  }
  return String(str).replace(reg, '');
};

/**
 * GUID:128位的数字标识符
 * @example utilscore.guid() // => "537a3b5a-5c1b-433d-9814-532efdda6b10"
 */
export const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
