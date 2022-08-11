export function throttle(func, delay) {
  let timer;
  return function () {
    if (timer) return   
      timer = setTimeout(() => {
        func.call(this, ...arguments);
        timer = null
      }, delay);
    }

}
