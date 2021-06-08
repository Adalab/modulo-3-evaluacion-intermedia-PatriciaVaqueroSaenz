import React from "react";
import '../stylesheet/App.scss';


const Pokemon = (props) =>{

    return (
        <article>
            <img src={props.pokemon.url} alt={props.pokemon.name} />
            <h3>{props.pokemon.name}</h3>
        </article>
    );
    
};
  
  export default Pokemon;