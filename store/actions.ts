export default {
  async nuxtServerInit({ dispatch }: any) {
    console.debug('called nuxtServerInit')
    await dispatch('liver/fetch')
  }
}
