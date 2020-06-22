<template>
  <Top
    :popular-clip-previews="popularClipPreviews"
    :favorite-clip-previews="favoriteClipPreviews"
  />
</template>

<script>
import { ListClipsRequest } from 'holo-back'
import Top from '../components/template/Top'
import ClipsApi from '../lib/api/clips'

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
      popularClipPreviews: clips.map(clip => {
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
      favoriteClipPreviews: [
        {
          to: '/movies/X9zw0QF12Kc',
          imageUrl: 'https://img.youtube.com/vi/X9zw0QF12Kc/mqdefault.jpg',
          text: '【歌ってみた】サクラカゼ'
        }, {
          to: '/movies/9nD7aQ_cKAM',
          imageUrl: 'https://img.youtube.com/vi/9nD7aQ_cKAM/mqdefault.jpg',
          text: '【歌ってみた】バレンタインキッス'
        }, {
          to: '/movies/xccH7xxG5zc',
          imageUrl: 'https://img.youtube.com/vi/xccH7xxG5zc/mqdefault.jpg',
          text: 'コンセプト'
        }
      ]
    }
  }
}
</script>
