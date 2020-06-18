<template>
  <SettingsMeEdit
    :loginUser="loginUser"
    @submit="submit"
  />
</template>
<script>
import SettingsMeEdit from '../../../components/template/SettingsMeEdit'
import UserApi from '../../../lib/api/users'

export default {
  components: {
    SettingsMeEdit
  },
  async asyncData () {
    if (process.server) {
      return {}
    }
    const { loginUser } = await UserApi.getUsersMe()
    return {
      loginUser
    }
  },
  data () {
    return {
      loginUser: {}
    }
  },
  computed: {
    googlePersonalInfo () {
      return process.env.GOOGLE_PERSONAL_INFO_URL
    }
  },
  methods: {
    submit (loginUser) {
      console.log(loginUser)
      // 更新処理を行う
      this.$router.push({ path: '/settings/me' })
    }
  }
}
</script>
<style>
</style>
