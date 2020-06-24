<template>
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
</template>
<script>
import UserApi from '../../lib/api/users'
import Avatar from '../../components/atoms/Avatar'

export default {
  components: {
    Avatar
  },
  async asyncData ({ route }) {
    const id = route.params.id

    const { user } = await UserApi.getUserDetail(id)
    return {
      user
    }
  },
  data: () => ({
    user: null
  })
}

</script>
<style>
</style>
