<template>
  <Top
    :popular-clip-previews="popularClipPreviews"
    :favorite-clip-previews="favoriteClipPreviews"
  />
</template>

<script>
import { GetUserFavoritesRequest, ListClipsRequest } from 'holo-back'
import Top from '../components/template/Top'
import ClipsApi from '../lib/api/clips'
import UserApi from '../lib/api/users'

export default {
  components: {
    Top
  },
  async asyncData () {
    const request = new ListClipsRequest()
    request.limit = 4
    request.orderBy = 'toprated'

    const { clips } = await ClipsApi.get(request)

    return {
      popularClipPreviews: clips.map((clip) => {
        return {
          to: '/clips/' + clip.id,
          imageUrl: clip.video.mediumThumnailUrl,
          text: clip.title,
        }
      })
    }
  },
  data () {
    return {
      favoriteClipPreviews: []
    }
  },
  async mounted () {
    try {
      const request = new GetUserFavoritesRequest()
      const { favoriteClips } = await UserApi.getUsersMeFavorites(request)
      this.favoriteClipPreviews = favoriteClips.map((clip) => {
        return {
          to: '/clips/' + clip.id,
          imageUrl: clip.video.mediumThumnailUrl,
          text: clip.title,
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
