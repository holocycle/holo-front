<template>
  <div>
    これはサンプル実装です
    ctx.params.id : {{ id }}
    <LiverDetail />
  </div>
</template>

<script>
import LiverDetail from '../../components/template/LiverDetail'

export default {
  components: {
    LiverDetail
  },
  asyncData (ctx) {
    return {
      id: ctx.params.id
    }
  }
}
</script>

<style scoped>

</style>
