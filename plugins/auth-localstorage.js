// auth-localstorage works only csr.
export default ({ store }) => {
  const token = localStorage.getItem('token')
  if (token) {
    store.commit('login/addToken', token)
  }

  const redirectPath = localStorage.getItem('redirectPath')
  if (redirectPath) {
    store.commit('login/addRedirectPath', redirectPath)
  }
}
