import React from "react";
import "../stylesheet/App.scss";

const Pokemon = (props) => {
  const renderTypes = () => {
    return props.pokemon.types.map((type,index) => {
      return <li key={index} className="typeList__item">{type}</li>;
    });
  };
  return (
    <article className='pokemon__card'>
      <img className='pokemon__card-image' src={props.pokemon.url} alt={props.pokemon.name} />
      <h3 className='pokemon__card-title'>{props.pokemon.name}</h3>
      <ul className="pokemon__card-typeList">{renderTypes()}</ul>
    </article>
  );
};

export default Pokemon;
