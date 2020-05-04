<template>
  <div>
    <h2>ログイン成功。トップページへリダイレクトします</h2>
  </div>
</template>

<script>
import Cookies from 'universal-cookie'

export default {
  mounted () {
    // CSR処理
    const cookies = new Cookies()
    const options = {
      path: '/'
    }

    const token = this.$route.hash.replace('#token=', '')

    cookies.set('token', token, options)
    this.$store.commit('login/add', token)

    this.$router.push(
      {
        path: '/'
      })
  }
}
</script>
