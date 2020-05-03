<template>
  <v-img
    max-width="191px"
    @click="click()"
    src="/google/1x/btn_google_signin_dark_normal_web.png"
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
