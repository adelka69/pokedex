function NavBar({ pokemonIndex, handleClick1, handleClick2, pokemonList }) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClick1}>précédent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClick2}>suivant</button>
      ) : null}
    </div>
  );
}
export default NavBar;
