// 节流函数处理input频繁请求ajax
export const debounce = (fn, delay = 30) => {
  let time = null
  return () => {
    if (time) {
      clearTimeout(time)
    } else {
      time = setTimeout(fn, delay)
    }
  }
}
