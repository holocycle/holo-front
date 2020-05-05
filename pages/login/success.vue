<template>
  <div>
    <h2>ログイン成功。トップページへリダイレクトします</h2>
  </div>
</template>

<script>
export default {
  mounted () {
    // CSR処理
    const token = this.$route.hash.replace('#token=', '')

    localStorage.setItem('token', token)
    this.$store.commit('login/add', token)

    this.$router.push({ path: '/' })
  }
}
</script>
