<template>
  <div>
    <v-card v-if="user">
      <v-card-text>
        <v-row>
          <v-col cols="auto">
            <Avatar size="70" :src="user.iconUrl" />
          </v-col>
          <v-col>
            <h2>{{ user.name }}</h2>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-divider />
    <h2>お気に入り動画</h2>
    <v-row>
      <v-col
        v-for="clip in favoriteClips"
        :key="clip.id"
        xs="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ClipPreviewCard
          :to="getDetailUrl(clip.id)"
          :image-url="clip.video.mediumThumnailUrl"
          :title="clip.title"
          :favorite-count="clip.favoriteCount"
          :published-at="clip.video.publishedAt"
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
import { GetUserFavoritesRequest } from 'holo-back'
import UserApi from '../../lib/api/users'
import Avatar from '../../components/atoms/Avatar'
import ClipPreviewCard from '../../components/molecules/clips/ClipPreviewCard'

export default {
  components: {
    Avatar,
    ClipPreviewCard
  },
  data: () => ({
    user: null,
    favoriteClips: []
  }),
  methods: {
    getDetailUrl (clipId) {
      return '/clips/' + clipId
    }
  },
  async mounted () {
    try {
      const { loginUser } = await UserApi.getUsersMe()
      this.user = loginUser
      console.log(loginUser)

      const request = new GetUserFavoritesRequest()
      const { favoriteClips } = await UserApi.getUsersMeFavorites(request)
      this.favoriteClips = favoriteClips
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
<style>
</style>
