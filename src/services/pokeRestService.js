async function fetchPokemonInfo(url) {

    const response = await fetch(url);
    const result = await response.json();

    return {
        imgURL: result.sprites.other["official-artwork"].front_default,
        id: result.id,
        formattedId: "#" + result.id.toString().padStart(4, "0"),
        name: result.name
    }
}

async function fetchPokemonList(url) {

    const response = await fetch(url);
    const result = await response.json();

    return result.results;
}

export default {
    fetchPokemonInfo,
    fetchPokemonList
}