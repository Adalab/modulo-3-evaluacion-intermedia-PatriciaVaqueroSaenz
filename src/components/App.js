import React, { useState } from "react";
import PokeList from "./PokeList";
import data from "../data/data.json";
import "../stylesheet/App.scss";
import image from "../images/pokeball.png"

const App = () => {
  const [pokemonInfo] = useState(data);
  const [favs, setFavs] = useState([]);

  const handlePokemon = clickedId => {
    console.log(clickedId);
    const favPokemonIndex = favs.findIndex(fav => {
      return fav.id === clickedId;
    });

    //si no está en favoritos, lo añadimos 
    if (favPokemonIndex === -1) {
      const pokemonClicked = pokemonInfo.find(pokemon => {
        return pokemon.id === clickedId;
      });
      favs.push(pokemonClicked);
      setFavs([...favs]);
    //si está en favoritos lo quitamos
    } else {
      favs.splice(favPokemonIndex, 1);
      setFavs([...favs]);
    }
  };

  return (
    <>
      <header className="header__section">
        <h1 className="title__header">Mi lista de pokemon</h1>
        <img className='image__header' src={image} alt="pokeball" />
      </header>
      <main className="main__section">
        <section className="pokelist__section">
          <PokeList pokemonInfo={pokemonInfo} handlePokemon={handlePokemon}/>
        </section>
        <section>
          <h2>Favoritos</h2>
          <PokeList pokemonInfo={favs} handlePokemon={handlePokemon} />
        </section>
      </main>
    </>
  );
};

export default App;
