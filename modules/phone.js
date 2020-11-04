function phone(phoneNum, split = "-", distribute = "3/4/4") {
  let disList = distribute.split("/").map(item => +item);
  if(!disList.length) return phoneNum;
  disList = disList.filter(item => item > 0)
  let total = 0, ret = []
  let startIdx = 0;

  for (let i = 0, iLen = disList.length; i < iLen; i++) {
    if(total < 11) {
      let curItem = disList[i];
      ret.push(phoneNum.substr(startIdx, curItem)) 
      startIdx = startIdx + curItem
      total += Number(curItem)
    }
  }
  if(total < 11) {
    ret.push(phoneNum.substr(total, 11 - total))
  }

  return ret.join(split);
}

export default phone;
