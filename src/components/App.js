import React, { useState } from "react";
import PokeList from "./PokeList";
import data from '../data/data.json';
import '../stylesheet/App.scss';


const App =()=> {
  
  const [pokemonInfo] = useState(data);
    return (
      <>
      <header>
        <h1>Mi lista de pokemon</h1>
      </header>
      <main>
        <section>
          <PokeList pokemonInfo = {pokemonInfo}/>
        </section>
      </main>
      </>
    );
}


export default App;
