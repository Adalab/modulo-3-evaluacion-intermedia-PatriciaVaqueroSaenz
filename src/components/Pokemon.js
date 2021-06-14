import React from "react";
import "../stylesheet/App.scss";

const Pokemon = (props) => {

  const handleClick = ev => {
    // console.log(props.id);
    // console.log(ev.currentTarget.id);
    props.handlePokemon(props.pokemon.id);
  };

  const renderTypes = () => {
    return props.pokemon.types.map((type,index) => {
      return <li key={index} className="typeList__item">{type}</li>;
    });
  };
  return (
    <article className='pokemon__card' onClick={handleClick}>
      <img className='pokemon__card-image' src={props.pokemon.url} alt={props.pokemon.name} />
      <h3 className='pokemon__card-title'>{props.pokemon.name}</h3>
      <ul className="pokemon__card-typeList">{renderTypes()}</ul>
    </article>
  );
};

export default Pokemon;


Pokemon.propTypes = {
  pokemon: PropTypes.object
};