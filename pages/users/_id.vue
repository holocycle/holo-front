<template>
  <div>
    <v-card>
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
import UserApi from '../../lib/api/users'
import Avatar from '../../components/atoms/Avatar'
import ClipPreviewCard from '../../components/molecules/clips/ClipPreviewCard'

export default {
  components: {
    Avatar,
    ClipPreviewCard
  },
  async asyncData ({ route }) {
    const id = route.params.id

    const { user } = await UserApi.getUserDetail(id)
    const { favoriteClips } = await UserApi.getUserFavorites(id)

    return {
      user,
      favoriteClips
    }
  },
  data: () => ({
    user: null,
    favoriteClips: []
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
