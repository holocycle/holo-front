<template>
  <div>
    <h2>ログイン成功。リダイレクトします</h2>
  </div>
</template>

<script>
export default {
  mounted () {
    // CSR処理
    const token = this.$route.hash.replace('#token=', '')

    // アクセストークンを永続化しつつstoreに格納する
    localStorage.setItem('token', token)
    this.$store.commit('login/addToken', token)

    // ログイン後の遷移先を取得後、localStorageから削除する
    const path = this.$store.state.login.redirectPath
    localStorage.removeItem('redirectPath')

    this.$router.push({ path })
  }
}
</script>
