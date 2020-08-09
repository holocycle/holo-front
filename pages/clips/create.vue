<template>
  <ClipsCreate
    :video-id="videoId"
    :start="start"
    :end="end"
    :searched-tags="searchedTags"
    @getSearchedTags="getTags"
    @confirmClip="confirmClip"
  />
</template>

<script>
import { ListTagsRequest } from 'holo-back'
import ClipsCreate from '../../components/template/clips/ClipsCreate'
import TagsApi from '../../lib/api/tags'

export default {
  components: {
    ClipsCreate
  },
  asyncData (ctx) {
    const query = ctx.query
    return {
      videoId: query.videoId,
      start: query.start,
      end: query.end
    }
  },
  data () {
    return {
      videoId: '',
      start: 0,
      end: -1,
      searchedTags: []
    }
  },
  methods: {
    getTags (key) {
      const request = new ListTagsRequest()
      request.key = key
      TagsApi.get(request).then(
        (res) => {
          this.searchedTags = res.clips
        }
      )
    },
    confirmClip (videoId, start, end) {
      this.$router.push({
        path: '/clips/confirm',
        query:
          {
            videoId,
            start,
            end
          }
      })
    }
  }
}
</script>

<style scoped>

</style>
