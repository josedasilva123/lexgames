import { iGame } from "../types/types";

export interface iGamesContext{
    addGame: (gameData: iGame) => void;
    removeGame: (clickedGame: iGame) => void;
    ratingGame: (gameId: number, rating: number) => void;
  }
  