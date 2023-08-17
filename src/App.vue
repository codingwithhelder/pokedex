<template>
  <h1>Pokédex!</h1>
  <PokeList />
</template>

<script>
import PokeList from "./components/PokeList.vue";

export default {
  components: {
    PokeList
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>