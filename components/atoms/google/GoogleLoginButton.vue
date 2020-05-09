<template>
  <v-img
    max-width="191px"
    src="/google/1x/btn_google_signin_dark_normal_web.png"
    @click="click()"
  />
</template>

<script>
export default {
  methods: {
    click () {
      location.href = process.env.LOGIN_URL
    }
  }
}
</script>
