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
  data () {
    return {
      livers: this.$store.state.liver.list
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
