// auth-localstorage works only csr.
export default ({ store }) => {
  const token = localStorage.getItem('token')
  if (token) {
    store.commit('login/add', token)
  }
}
