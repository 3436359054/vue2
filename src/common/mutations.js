export default {
  changeCity (state, changeCity) {
    state.city = changeCity
    localStorage.city = changeCity
  },
  changeIndexCity (state, changeIndexCity) {
    state.city = changeIndexCity
    localStorage.city = changeIndexCity
  }
}
