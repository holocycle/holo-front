<template>
  <div>
    <h2>人気の動画</h2>
    <v-row>
      <v-col
        v-for="clip in topratedClips"
        :key="clip.id"
        xs="12"
        sm="6"
        md="4"
        lg="3"
      >
        <MoviePreviewCard
          :to="getDetailUrl(clip.id)"
          :image-url="clip.video.mediumThumnailUrl"
          :text="clip.title"
        />
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination
        :length="3"
        disabled
      ></v-pagination>
    </div>
  </div>
</template>
<script>
import { ListClipsRequest } from 'holo-back'
import MoviePreviewCard from '../../components/molecules/cards/MoviePreviewCard'
import ClipsApi from '../../lib/api/clips'

export default {
  components: {
    MoviePreviewCard
  },
  async asyncData () {
    const request = new ListClipsRequest()
    request.limit = 20
    request.orderBy = 'toprated'
    const { clips } = await ClipsApi.get(request)
    return {
      topratedClips: clips
    }
  },
  data: () => ({
    topratedClips: null
  }),
  methods: {
    getDetailUrl (clipId) {
      return '/clips/' + clipId
    }
  }
}
</script>
<style>
</style>
