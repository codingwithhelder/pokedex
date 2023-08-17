<template>
    <div class="poke-list">
        <div v-for="pokemon in pokemonList">
            <PokeCard
                :pokemonInfoURL="pokemon.url"
            />
        </div>
    </div>
</template>

<script>
import PokeCard from "./PokeCard.vue";
import pokeRestService from "../services/pokeRestService";

export default {
  components: {
    PokeCard
  },
  data() {
    return {
        pokemonList: []
    }
  },
  async mounted() {
    this.pokemonList = await pokeRestService.fetchPokemonList("https://pokeapi.co/api/v2/pokemon");
  }
}
</script>

<style scoped>
.poke-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;

    gap: 16px;
}
</style>