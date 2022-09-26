import React from "react";
import styles from "./style.module.css";

const GameCard = ({ game, removeGame }) => {
  return (
    <li className={styles.gameCard}>
      <div>
        <span className="paragraph">{game.category}</span>
        <h3 className="title two">{game.name}</h3>
      </div>
      <button className="btn solid2 default" onClick={() => removeGame(game)}>
        Remover
      </button>
    </li>
  );
};

export default GameCard;
