 import {isDOM} from './_types'
 
 export default function IntersectionObserver (element, showOnce = true) {
   return new Promise((resolve, reject) => {

    if(!isDOM(element)) {
      reject(-1)
      return
    }
    let io = new IntersectionObserver((entries) => {
      resolve(entries, io);
      if(showOnce) {
        io.disconnect()
      }
    });

    io.observe(element)
   })
   

}
