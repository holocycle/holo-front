export const LOGOUT_TOKEN = ''
export const DEFAULT_REDIRECT_PATH = '/'

export const state = () => ({
  token: LOGOUT_TOKEN,
  redirectPath: DEFAULT_REDIRECT_PATH
})

export const mutations = {
  addToken (state: any, token: string) {
    state.token = token
  },
  removeToken (state: any) {
    state.token = LOGOUT_TOKEN
  },
  addRedirectPath (state: any, path: string) {
    state.redirectPath = path
  },
  removeRedirectPath (state: any) {
    state.redirectPath = DEFAULT_REDIRECT_PATH
  }
}

export const getters = {
  login: (state: any) => {
    return state.token !== LOGOUT_TOKEN
  }
}
