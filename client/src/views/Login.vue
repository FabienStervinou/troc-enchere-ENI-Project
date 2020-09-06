<template>
  <div class="login-form flex-center">
    <div class="login">
      <form action="POST">
        <section>
          <div class="flex-between">
            <label for="name">Identifiant</label>
            <input type="text" name="name" />
          </div>
          <div class="flex-between">
            <label for="name">Mot de passe</label>
            <input type="password" name="password" autocomplete="on" />
          </div>
        </section>
        <section class="flex-row">
          <div class="half-w">
            <button class="btn btn-login">Connexion</button>
          </div>
          <div class="half-w flex-col">
            <label for="remember-me">
              <input type="checkbox" id="remember-me" name="remember-me" />
              Se Souvenir de moi
            </label>
            <a href="#" class="remember-me">Mot de passe oublié</a>
          </div>
        </section>
        <section>
          <button class="btn btn-register">Créer un compte</button>
        </section>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.login-form {
  .login {
    width: 350px;
    form {
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
