import * as allExports from './index-all';

const easyFormat = {}
easyFormat.VERSION =  '1.0.0'

const allMethods = Object.keys(allExports)

allMethods.forEach(key => {
  let fn = allExports[key];
  if(typeof fn === 'function') {
    easyFormat[key] = function () {
      return fn.apply(null, arguments)
    }
  }
})


export default easyFormat;


