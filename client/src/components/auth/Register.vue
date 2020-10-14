<template>
  <div class="login-form flex-center">
    <form
      class="login" 
      @submit.prevent="register"
    >
      <section>
        
        <InputText
          v-model="username"
          label="Identifiant"
          @keydown.enter="search"
        />

        <InputText
          v-model="email"
          label="Email"
          type="email"
          @keydown.enter="search"
        />

        <InputText
          v-model="password"
          label="Mot de passe"
          type="password"
          @keydown.enter="search"
        />
        
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
import InputText from '../utils/InputText';

export default {
  name: 'register',
  components: {
    InputText
  },
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
  },
}
</script>

<style lang="scss">
.login-form {
  form {
    width: 450px;

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
    color: $primary_color;
  }
}

.btn-register {
  padding: 50px 108px;
}
</style>