<template>
  <nav class="container">
    <div class="nav-item logo">ENI-Enchères</div>
    <div class="nav-item">Se connecter</div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
nav {
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  background-color: rgb(81, 202, 152);
  justify-content: space-between;

  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    &.logo {
      font-size: 1.5em;
      font-weight: 600;
    }
  }
}
</style>
