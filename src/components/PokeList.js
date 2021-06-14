import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheet/App.scss";

const PokeList = (props) => {
  const listItems = props.pokemonInfo.map((pokemon) => {
    const keyString = pokemon.id.toString();
  
    return (
      <li key={keyString} className="pokelist__item">
        <Pokemon pokemon={pokemon} handlePokemon={props.handlePokemon}/>
      </li>
    );
  });
  return <ul className="pokelist">{listItems}</ul>;
  
};

export default PokeList;
