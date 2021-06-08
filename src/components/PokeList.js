import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheet/App.scss";

const PokeList = (props) => {
  const listItems = props.pokemonInfo.map((pokemon) => {
    return (
      <li className="pokelist__item">
        <Pokemon pokemon={pokemon} />
      </li>
    );
  });
  return <ul className="pokelist">{listItems}</ul>;
};

export default PokeList;
