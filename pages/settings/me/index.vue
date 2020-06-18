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
  }
}
</script>
<style>
</style>
