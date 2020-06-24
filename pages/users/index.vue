<template>
  <v-card>
    <v-list>
      <template v-for="(user, index) in users">
        <v-divider
          v-if="index !== 0"
          :key="index"
        />
        <v-list-item
          :key="user.id"
          :to="userDetailUrl(user)"
        >
          <v-list-item-avatar>
            <Avatar size="70" :src="user.iconUrl" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="user.name" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
import { ListUserRequest } from 'holo-back'
import UserApi from '../../lib/api/users'
import Avatar from '../../components/atoms/Avatar'

export default {
  components: {
    Avatar
  },
  async asyncData () {
    const request = new ListUserRequest()
    request.limit = 20
    request.orderBy = 'latest'

    const { users } = await UserApi.getUsers(request)
    return {
      users
    }
  },
  data: () => ({
    users: []
  }),
  methods: {
    userDetailUrl (user) {
      return '/users/' + user.id
    }
  }
}

</script>
<style>
</style>
