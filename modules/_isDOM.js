export default function isDOM(target) {
  if(typeof HTMLElement === 'object' ) {
    return target instanceof HTMLElement
  } else {
    return target && typeof target === 'object' && target.nodeType === 1 
  }
}