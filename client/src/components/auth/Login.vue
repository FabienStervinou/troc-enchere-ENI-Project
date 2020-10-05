<template>
  <div class="login-form flex-center">
    <form 
      class="login" 
      @submit.prevent="login">
      <section>
        <div class="flex-between">
          <label for="email">Identifiant</label>
          <input
            required
            v-model="email"
            type="text"
            name="email"
          >
        </div>
        <div class="flex-between">
          <label for="password">Mot de passe</label>
          <input
            required
            v-model="password"
            type="password"
            name="password" 
            autocomplete="on"
          >
        </div>
      </section>
      <section class="flex-row">
        <div class="half-w">
          <button 
            class="btn btn-login"
            type="submit"
            >
            Connexion
          </button>
        </div>
        <div class="half-w flex-col">
          <label for="remember-me">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
            >
            Se Souvenir de moi
          </label>
          <a
            href="#"
            class="remember-me"
          >Mot de passe oublié</a>
        </div>
      </section>
      <section>
        <div class="btn btn-register">
          <router-link to="/register">
            Créer un compte
          </router-link>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
export default { 
  name: 'login',
  data() {
    return {
        id: null,
        email: '',
        password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('retrieveToken', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        this.$router.push({ name: 'home' })
        return response
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style lang="scss">
.login-form {
  form {
    width: 350px;

    section {
      min-height: 75px;
      margin-top: 30px;

      .flex-between {
        margin-bottom: 15px;

        label {
          justify-content: space-between;
        }
      }
    }
  }
}

.btn-login {
  padding: 25px 40px;
}

.remember-me {
  text-decoration: underline;

  &:hover {
    color: #51ca98;
  }
}

.btn-register {
  padding: 50px 108px;
}
</style>
