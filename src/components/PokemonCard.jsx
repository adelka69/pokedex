const PokemonCard = ({ pokemon }) => {
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

export default PokemonCard;
