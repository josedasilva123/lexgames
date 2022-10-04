import React, { useState } from "react";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { StyledFavoriteCard } from "./style";

const FavoriteCard = ({ game, removeGame, ratingGame }) => {
  const [ratingInput, setRatingInput] = useState(1);

  const onSubmit = (event) => {
    event.preventDefault();
    if(ratingInput){
      ratingGame(game.id, ratingInput);
    }    
  }

  return (
    <StyledFavoriteCard>
      <div>
        {game.rating && <StyledParagraph>{game.rating}</StyledParagraph>}
        <StyledParagraph>{game.genre}</StyledParagraph>
       
        <StyledTitle tag="h3" fontSize="two">
          {game.title}
        </StyledTitle>

        <form onSubmit={onSubmit}>
         <input type="number" value={ratingInput} onChange={(e) => setRatingInput(+e.target.value)} min={1} max={5} /> 
         <button type="submit">Avaliar</button>
        </form>
      </div>
      <StyledButton buttonStyle="solid2" onClick={() => removeGame(game)}>Remover</StyledButton>
    </StyledFavoriteCard>
  );
};

export default FavoriteCard;
