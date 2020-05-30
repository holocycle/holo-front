<template>
  <v-container>
    <v-row>
      <h1>
        お気に入り
      </h1>
    </v-row>
  </v-container>
</template>
<script>
import UserApi from '../../lib/api/users'

export default {
  async asyncData () {
    const { loginUser } = await UserApi.getUsersMe()
    console.log(loginUser)
    return {
      loginUser
    }
  }
}

</script>
<style>
</style>
