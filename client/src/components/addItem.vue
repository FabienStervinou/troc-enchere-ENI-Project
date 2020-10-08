<template>
  <div class="item-container">

    <section class="item-img-container">
      <img src="#" alt="Image associée à l'enchère">
    </section>

    <section class="item-form-container">

      <form class="item-form" @submit.prevent="createItem">
        <label for="title">
            Article :
          <input type="text" name="title" v-model="title"  />
        </label>
        <label for="description">
            Description :
          <input type="text" name="description" v-model="description"  />
        </label>
        <label for="categories" class="">
          Catégorie :
          <input name="categorie" list="categorie" v-model="categorie"/>
          <datalist id="categorie">
            <option value="TODO for DB" />
          </datalist>
        </label>
        <label for="Image">Photo de l'article :
          <input type="image">
        </label>
        <label for="startingPrice">Mise à prix :
          <input type="text" name="startingPrice" v-model="startingPrice">
        </label>
        <label for="startDateAuction">Début de l'enchère :
          <input type="date" name="startDateAuction" v-model="startDateAuction">
        </label>
        <label for="endDateAuction">Fin de l'enchère :
          <input type="date" name="endDateAuction" v-model="endDateAuction">
        </label>
        <label for="submit">
          <input class="btn btn-register" type="submit"/>
        </label>
      </form>

    </section>

  </div>
</template>

<script>
export default {
  name: 'addItem',
  data() {
    return {
      title: '',
      description: '',
      categorie: null,
      image: null,
      startingPrice: 0,
      startDateAuction: 0,
      endDateAuction: 0,
    }
  },
  methods: {
    createItem() {
      this.$store.dispatch('createItem', {
        nameItem: this.title,
        description: this.description,
        categorie: this.categorie,
        startingPrice: this.startingPrice,
        startDateAuction: this.startDateAuction,
        endDateAuction: this.endDateAuction,
        userId: this.$store.getters.userId,
      })
      .then(response => {
        this.$router.push({ name: 'home' })
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
.item-container {
  display: flex;
  justify-content: center;
  padding: 50px 200px 0;
  height: calc(100vh - 70px);

  // Section image
  .item-img-container {
    height: 350px;
    width: 350px;
    background-color: #5ae2aa;
  }

  // Section form
  .item-form-container {
    padding: 20px;

    .item-form {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>