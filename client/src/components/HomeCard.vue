<template>
  <div class="card-container flex-row">
    <div v-for="item in items" :key="item.id" class="card flex-">
      {{ item.id }}
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {
        id: Number,
        title: String
      }
    };
  }
};
</script>

<style lang="scss">
.card-container {
  padding: 0 125px;
  flex-wrap: wrap;
  justify-content: space-around;

  .card {
    background-color: rgb(255, 185, 185);
    height: 200px;
    width: calc(100% / 2 - 100px);
    margin-bottom: 90px;
  }
}
</style>
