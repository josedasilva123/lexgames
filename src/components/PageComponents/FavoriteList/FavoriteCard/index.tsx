import React, { useContext } from "react";
import { iGame } from "../../../../contexts/@types/types";
import { GamesContext } from "../../../../contexts/GamesContext/GamesContext";
import { StyledButton } from "../../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../../styles/typography";
import StarInput from "../../../CustomInputs/StarInput";
import { StyledFavoriteCard } from "./style";

interface iFavoriteCardProps {
  game: iGame;
}

const FavoriteCard = ({ game }: iFavoriteCardProps) => {
  const { removeGame, ratingGame } = useContext(GamesContext);

  return (
    <StyledFavoriteCard>
      <div>
        <div className="favoriteRating">
          {game.rating && <StyledParagraph>{game.rating}</StyledParagraph>}

          <StarInput
            currentRating={game.rating ? game.rating : 0}
            callback={(number: number) => ratingGame(game.id, number)}
          />
        </div>

        <StyledParagraph>{game.genre}</StyledParagraph>

        <StyledTitle tag="h3" fontSize="two">
          {game.title}
        </StyledTitle>
      </div>

      <StyledButton buttonStyle="solid2" onClick={() => removeGame(game)}>
        Remover
      </StyledButton>
    </StyledFavoriteCard>
  );
};

export default FavoriteCard;
