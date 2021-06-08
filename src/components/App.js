import React, { useState } from "react";
import PokeList from "./PokeList";
import data from "../data/data.json";
import "../stylesheet/App.scss";
import image from "../images/pokeball.png"

const App = () => {
  const [pokemonInfo] = useState(data);
  return (
    <>
      <header className="header__section">
        <h1 className="title__header">Mi lista de pokemon</h1>
        <img className='image__header' src={image} alt="pokeball" />
      </header>
      <main className="main__section">
        <section className="pokelist__section">
          <PokeList pokemonInfo={pokemonInfo} />
        </section>
      </main>
    </>
  );
};

export default App;
