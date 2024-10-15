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
        pokemonName.textContent = `Name: ${data.name[0].toUpperCase()}${data.name.slice(1)}`;
        pokemonId.textContent = `Id: #${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;

        //stats
        hp.textContent = `Hp: ${data.stats[0].base_stat}`;
        attack.textContent = `Attack: ${data.stats[1].base_stat}`;
        defense.textContent = `Defense: ${data.stats[2].base_stat}`;
        spAttack.textContent = `Special-Attack: ${data.stats[3].base_stat}`;
        spDefense.textContent = `Special-Defense: ${data.stats[4].base_stat}`;
        speed.textContent = `Speed: ${data.stats[5].base_stat}`;

        //set pokemon image
        spriteContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`;

        //set pokemon types
        types.innerHTML = data.types
            .map((obj) => `<span>${obj.type.name[0].toUpperCase()}${obj.type.name.slice(1)}</span> `).join('');
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