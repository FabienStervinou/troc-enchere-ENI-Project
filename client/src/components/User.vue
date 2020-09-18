<template>
  <div>
    <h1>User Component</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userid: Number,
        lastname: String,
        firstname: String
      }
    };
  }
};
</script>

<style lang="scss">
h1 {
  font-size: 3em;
}
</style>
