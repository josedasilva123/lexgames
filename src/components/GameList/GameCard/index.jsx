import React, { useContext } from "react";
import { GamesContext } from "../../../contexts/GamesContext";
import { StyledButton } from "../../../styles/button";
import { StyledGameCard } from "./style";

const GameCard = ({ game }) => {
  const { addGame } = useContext(GamesContext);
  return (
    <StyledGameCard>
      <div className="content">
        <img src={game.thumbnail} alt={game.title} />
        <h3>{game.title}</h3>
        <p>{game.short_description}</p>
      </div>
      <StyledButton buttonStyle="solid1" onClick={() => addGame(game)}>
        Adicionar
      </StyledButton>
    </StyledGameCard>
  );
};

export default GameCard;
