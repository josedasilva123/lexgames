import React from "react";

const GameCard = ({game, removeGame}) => {
  return (
    <li>
      <span>{game.category}</span>
      <h3>{game.name}</h3>
      <button onClick={() => removeGame(game)}>
        Remover
      </button>
    </li>
  );
};

export default GameCard;
