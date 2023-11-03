const NavBar = ({
  pokemonIndex,
  pokemonList,
  handleClick1,
  handleClick2,
  setPokemonIndex,
}) => {
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
