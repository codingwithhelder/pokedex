<template>
    <div class="poke-card">
        <div v-if="pokemonDetails">
            <img :src="pokemonDetails.imgURL">
            <div class="poke-card-id">{{ pokemonDetails.formattedId }}</div>
            <div class="poke-card-name">{{ pokemonDetails.name }}</div>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script>
import pokeRestService from "../services/pokeRestService";

export default {
    props: ["pokemonInfoURL"],
    data() {
        return {
            pokemonDetails: undefined
        }
    },
    async mounted() {
        this.pokemonDetails = await pokeRestService.fetchPokemonInfo(this.pokemonInfoURL);
    }
}
</script>

<style scoped>
.poke-card {
    width: 200px;

    background-color: #EBEBEB;
    border-radius: 10px;
}

.poke-card img {
    display: block;
    margin: 0 auto;
    width: 80%;
}

.poke-card-id {
    color: #999;
    padding: 10px;
}

.poke-card-name {
    color: #333;
    padding: 10px;
}
</style>