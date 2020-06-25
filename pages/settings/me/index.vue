<template>
  <SettingsMe
    :loginUser="loginUser"
    editUrl="/settings/me/edit"
    :googlePersonalInfo="googlePersonalInfo"
  />
</template>
<script>
import SettingsMe from '../../../components/template/SettingsMe'
import UserApi from '../../../lib/api/users'

export default {
  components: {
    SettingsMe
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
  async mounted () {
    try {
      const { loginUser } = await UserApi.getUsersMe()
      this.loginUser = loginUser
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
<style>
</style>
