<template>
  <div id="app">
    <nav class="container">
      <router-link 
        :to="{ name: 'home' }" 
        exact 
        class="nav-item logo"
      >
        ENI-Enchères
      </router-link>

      <div class="separator"></div>

      <router-link 
        :to="{ name: 'login' }" 
        class="nav-item"
      >
        Se connecter
      </router-link>
      <router-link 
        :to="{ name: 'register' }" 
        class="nav-item"
      >
        S'enregistrer
      </router-link>
      <router-link 
        :to="{ name: 'logout' }" 
        class="nav-item"
      >
        Déconnexion
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-between {
  display: flex;
  justify-content: space-between;
}

.half-w {
  width: calc(100% / 2);
}

.half-h {
  height: calc(100% / 2);
}

.btn {
  border-radius: 5px;
  border: none;
  padding: 5px 15px;
  background-color: rgb(81, 202, 152);
  font-weight: 500;
  font-size: 1.1em;
  color: #fff;
  transition: 400ms;

  &:hover {
    background-color: rgb(89, 223, 167);
    transition: 400ms;
  }
}

nav {
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  background-color: rgb(81, 202, 152);
  justify-content: space-between;

  .separator {
    flex-grow: 4;
  }

  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: rgb(81, 202, 152);
    z-index: 500;

    &.logo {
      font-size: 1.5em;
      font-weight: 600;

      &.router-link-active {
        background-color: rgb(81, 202, 152);
      }
    }

    &.router-link-active {
      background-color: rgb(90, 226, 170);
    }
  }
}
</style>
