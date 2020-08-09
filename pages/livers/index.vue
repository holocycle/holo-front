<template>
  <LiverListTemplate
    :livers="livers"
    :liver-detail-url="liverDetailUrl"
  />
</template>

<script>
import LiverListTemplate from '../../components/template/livers/LiverListTemplate'

export default {
  components: {
    LiverListTemplate
  },
  async asyncData (ctx) {
    await ctx.store.dispatch('liver/fetch')
    return {
      livers: ctx.store.state.liver.list
    }
  },
  methods: {
    liverDetailUrl (id) {
      return '/livers/' + id
    }
  }
}
</script>

<style scoped>
</style>
