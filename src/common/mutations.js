export default {
  changeCity (state, changeCity) {
    state.city = changeCity
    localStorage.city = changeCity
  },
  changeDownloadShow (state) {
    state.downloadShow = false
  }
}
