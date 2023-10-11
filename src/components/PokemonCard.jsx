import PropTypes from "prop-types";
const PokemonCard = ({ pokemon }) => {
  PokemonCard.prototype = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }),
  };
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
