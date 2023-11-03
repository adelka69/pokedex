const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClick1 = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleClick2 = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);
  const handleSetPokemonIndex = (index) => {
    // Utiliser une ternaire pour afficher l'alerte si "pikachu" est sélectionné
    pokemonList[index].name === "pikachu"
      ? alert("pika pikachu !!!")
      : setPokemonIndex(index);
  };

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <NavBar
          pokemonList={pokemonList}
          setPokemonIndex={handleSetPokemonIndex}
        />
      </div>
    </>
  );
}
export default App;
