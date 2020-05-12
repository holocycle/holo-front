// FIXME: 暫定
<template>
  <div>
    <LiverDetail
      :name="name"
      :channel-url="channelUrl"
      avatar-url="http://yt3.ggpht.com/a/AATXAJxeNWA_oVxR5sKIs9hQotV_M9zS3NtgqB3tcw=s88-c-k-c0xffffffff-no-rj-mo"
      banner-url="https://yt3.ggpht.com/m3-S3Ki1hhUsaVjCASbseVicnGGEBFwSLxhTwb0H-aJ-lfawoxqLtEPK8qE8ZMYpEDz7LvS_7w=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
      :channel-subscriber="1000000"
    />
  </div>
</template>

<script>
import LiverDetail from '../../components/template/LiverDetail'
import LiverApi from '../../lib/api/livers'

export default {
  components: {
    LiverDetail
  },
  async asyncData (ctx) {
    const liverId = ctx.params.id
    const { liver } = await LiverApi.getBy(liverId)
    return {
      liver,
      name: liver.name
    }
  },
  computed: {
    channelUrl () {
      return 'https://www.youtube.com/channel/' + this.liver.channelId
    }
  }
}
</script>

<style scoped>
</style>
