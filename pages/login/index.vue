<template>
  <v-container>
    <v-col cols="6">
      <v-row justify="center">
        <v-card>
          <v-card-title>
            ログイン
          </v-card-title>
          <v-card-text>
            <GoogleLoginButton/>
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import GoogleLoginButton from '../../components/atoms/google/GoogleLoginButton'

export default {
  components: {
    GoogleLoginButton
  },
  data () {
    return {}
  },
  methods: {
    click () {
      location.href = process.env.LOGIN_URL
    }
  }
}
</script>
