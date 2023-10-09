const PokemonCard = () => {
  const pokemon = pokemonList[0];

  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name || "Nom inconnu"} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name || "Nom inconnu"}</figcaption>
    </figure>
  );
};

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default PokemonCard;
