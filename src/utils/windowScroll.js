import { throttle } from "./throttle"
export const windowScroll = (ref) => {
  let resFun
  window.addEventListener(
    "scroll",
    (resFun = throttle(function () {
      ref.value =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
    }, 500)
    )
  )
  return resFun
}