<template>
  <div>
    <v-row>
      <v-col
        v-for="liver in livers"
        :key="liver.id"
        xs="12"
        sm="6"
        md="4"
        lg="3"
      >
        <LiverOverviewCard
          :to="liverDetailUrl.bind(this, liver.id)"
          :image-url="liver.channel.mediumThumbnailUrl"
          :liver-name="liver.name"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LiverOverviewCard from '../../molecules/livers/LiverOverviewCard'

export default {
  components: {
    LiverOverviewCard
  },
  props: {
    livers: {
      type: Array,
      required: true
    },
    liverDetailUrl: {
      type: Function,
      required: true
    }
  }
}
</script>
<style>
</style>
