const NavBar = ({ pokemonIndex, pokemonList, setPokemonIndex }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setPokemonIndex(index);
            }}
          >
            {pokemon.name}
          </button>
        );
      })}
    </div>
  );
};

export default NavBar;
