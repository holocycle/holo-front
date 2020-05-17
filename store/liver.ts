import { Liver } from 'holo-back'
import LiverApi from '../lib/api/livers'

export const state = () => ({
  list: []
})

export const mutations = {
  set (state: any, payload: Array<Liver>) {
    state.list = payload
  }
}

export const actions = {
  async fetch ({ commit }: any) {
    try {
      const resp = await LiverApi.get()
      commit('set', resp.livers)
    } catch (err) {
      console.error(err)
    }
  }
}
