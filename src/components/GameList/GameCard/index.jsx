import React from "react";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { StyledGameCard } from "./style";

const GameCard = ({ game, removeGame }) => {
  return (
    <StyledGameCard>
      <div>
        <StyledParagraph>{game.category}</StyledParagraph>
       
        <StyledTitle tag="h3" fontSize="two">
          {game.name}
        </StyledTitle>
      </div>
      <StyledButton buttonStyle="solid2" onClick={() => removeGame(game)}>Remover</StyledButton>
    </StyledGameCard>
  );
};

export default GameCard;
