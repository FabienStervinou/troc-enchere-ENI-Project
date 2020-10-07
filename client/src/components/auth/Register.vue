<template>
  <div class="login-form flex-center">
    <form
      class="login" 
      @submit.prevent="register"
    >
      <section>
        <div class="flex-between">
          <label for="username">Identifiant</label>
          <input
            required
            v-model="username"
            type="text"
            name="username"
          >
        </div>
        <div class="flex-between">
          <label for="email">Email</label>
          <input
            required
            v-model="email"
            type="email"
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
      <section>
        <button 
          class="btn btn-register" 
          type="submit"
        >
          Créer un compte
        </button>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
        username: '',
        email: '',
        password: '',
    }
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        username: this.username,
        email: this.email,
        password: this.password
      })
      .then(response => {
        this.$router.push({ name: 'login' })
        return response
      })
      .catch(err => {
        return err
      })
    }
  }
}
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