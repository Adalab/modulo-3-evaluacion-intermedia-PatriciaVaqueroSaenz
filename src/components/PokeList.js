import React from "react";
import Pokemon from "./Pokemon";
import '../stylesheet/App.scss';


const PokeList = (props) =>{
  const listItems = props.pokemonInfo.map(
    (pokemon) => {
      return (
        <li>
          <Pokemon pokemon = {pokemon}/>
        </li>
      );
    }
  );
  return <ul>{listItems}</ul>;
};
  
  export default PokeList;