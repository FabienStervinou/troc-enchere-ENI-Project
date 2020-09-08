<template>
  <div class="home">
    <HomeFilter />
    <HomeCard />
  </div>
</template>

<script>
import HomeFilter from "../components/HomeFilter.vue";
import HomeCard from "../components/HomeCard.vue";
export default {
  name: "Home",
  components: {
    HomeFilter,
    HomeCard
  }
};
</script>
