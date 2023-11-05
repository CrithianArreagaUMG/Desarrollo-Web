const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
const searchInput = document.getElementById("Buscar");
const searchResults = document.getElementById("pokemon");
const apiContainer = document.getElementById("api");
// Cargar Pokémon iniciales
loadPokemonData();
function loadPokemonData() {
  fetch(URL)
    .then((res) => res.json())
    .then((result) => {
      displayPokemon(result.results);
    });
}
function displayPokemon(pokemonList) {
  let main = "";
  pokemonList.forEach((pokemon) => {
    const URLname = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
    fetch(URLname)
      .then((res) => res.json())
      .then((response) => {
        main += `
          <div class="pokemones">
            <div class="mostrar-pokemones">
              <h1>${pokemon.name}</h1>
              <img src="${response.sprites.front_shiny}" alt="">
            </div>
          </div>
        `;
        apiContainer.innerHTML = main;
      });
  });
}

searchInput.addEventListener("input", searchPokemon);

function searchPokemon() {
  const name = searchInput.value.trim().toLowerCase();

  if (name.length === 0) {
    searchResults.innerHTML = ""; // Limpiar resultados si no hay entrada
    loadPokemonData(); // Mostrar todos los Pokémon nuevamente
    return;
  }
  fetch(URL)
    .then((res) => res.json())
    .then((result) => {
      const matchingPokemons = result.results.filter((pokemon) =>
        pokemon.name.startsWith(name)
      );
      if (matchingPokemons.length > 0) {
        displayPokemon(matchingPokemons);
      } else {
        searchResults.innerHTML = "No se encontraron Pokémon con ese nombre.";
      }
    });
}

 