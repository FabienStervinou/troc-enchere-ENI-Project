<template>  
  <div class="container-filter">
    <form 
      action="#" 
      method="GET" 
      class="form-filter flex-row">
      
      <div class="half-w flex-col">

        <label 
          for="search" 
          class="label-filter">
          Filtres :
          <input
            type="text"
            name="search"
            placeholder="Nom de l'article contient"
          />
        </label>

        <label 
          for="categories" 
          class="filter-label">
          Catégorie :
          <input 
            name="categorie" 
            list="categorie" />

          <datalist id="categorie">
            <option value="Mobilier" />
            <option value="Informatique" />
            <option value="Téléphonie" />
            <option value="Mode" />
            <option value="Jeux vidéo" />
          </datalist>

        </label>

      </div>
      <div class="half-w">

        <input 
          type="submit" 
          value="Rechercher" 
          class="btn btn-search" />

      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container-filter {
  width: calc(100% - 250px);
  padding: 50px 125px 0 125px;

  .form-filter {
    width: 100%;

    .label-filter {
      padding: 25px 0;
    }

    .half-w {
      height: 150px;

      .btn-search {
        padding: 50px 150px;
      }
    }
  }
}
</style>
