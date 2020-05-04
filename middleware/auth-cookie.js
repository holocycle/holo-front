import Cookies from 'universal-cookie'

export default ({ req, store }) => {
  if (process.server) {
    const cookies = new Cookies(req.headers.cookie)
    const token = cookies.get('token')
    if (token) {
      store.commit('login/add', token)
    }
  }
}
