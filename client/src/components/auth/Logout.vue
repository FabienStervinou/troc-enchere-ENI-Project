<template>
  <div>
    Déconnexion...
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('destroyUserId')
    this.$store.dispatch('destroyToken')
    .then(response => {
      this.$router.push({ name: 'home' })
      return response
    })
  }
}
</script>
