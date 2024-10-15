const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');

const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const spAttack = document.getElementById('special-attack');
const spDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const types = document.getElementById('types');
const spriteContainer = document.getElementById('sprite-container');

const getPokemon = async () => {
    try {
        const pokemonNameOrId = searchInput.value.toLowerCase();
        const res = await fetch(
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
        const data = await res.json();

        //set data
        pokemonName.textContent = `${data.name[0].toUpperCase()}${data.name.slice(1)}`;
        pokemonId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;

        //stats
        hp.textContent = `hp: ${data.stats[0].base_stat}`;
        attack.textContent = `attack: ${data.stats[1].base_stat}`;
        defense.textContent = `defense: ${data.stats[2].base_stat}`;
        spAttack.textContent = `spAttack: ${data.stats[3].base_stat}`;
        spDefense.textContent = `spDefense: ${data.stats[4].base_stat}`;
        speed.textContent = `speed: ${data.stats[5].base_stat}`;

        //set pokemon image
        spriteContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`;

        //set pokemon types
        types.innerHTML = data.types
            .map((obj) => `<p>${obj.type.name}</p>`).join('');
    } catch (err) {
        alert("Pokémon not found");
        console.log(err);
    }
}//end getPokemon


//search on enter key press
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getPokemon();
    };
});

//search on button element click
searchBtn.addEventListener("click", () => {
    getPokemon();
});