import React from "react";
import '../stylesheet/App.scss';


const Pokemon = (props) =>{

    const renderTypes = () =>{
        return props.pokemon.types.map(
          (type) =>{
            return <li>{type}</li>
          }
        );
      };
    return (
        <article>
            <img src={props.pokemon.url} alt={props.pokemon.name} />
            <h3>{props.pokemon.name}</h3>
            <ul>{renderTypes()}</ul>
        </article>
    );
    
};
  
  export default Pokemon;