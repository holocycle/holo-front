export const state = () => ({
  token: ''
})

export const mutations = {
  add (state, token) {
    state.token = token
  },
  remove (state) {
    state.token = ''
  }
}
