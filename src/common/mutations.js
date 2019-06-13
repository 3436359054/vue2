export default {
  changeCity (state, changeCity) {
    state.city = changeCity
    localStorage.city = changeCity
  }
}
