/* eslint-disable no-restricted-globals */
import { createContext, useContext } from "react";
import { coreApi } from "../../services/api";
import { UserContext } from "../UserContext";
import { toast } from "react-toastify";
import { iApiError, iDefaultContextProps, iGame } from "../types/types";
import { AxiosError } from "axios";
import { iGamesContext } from "./types";

export const GamesContext = createContext({} as iGamesContext);

export const GamesProvider = ({ children }: iDefaultContextProps) => {
  const { favoriteList, setFavoriteList } = useContext(UserContext);

  const addGame = async (gameData: iGame) => {
    if (!favoriteList.find((game) => game.id === gameData.id)) {
      try {
        const token = localStorage.getItem("@TOKEN");

        const newData = [
          ...favoriteList,
          {
            id: gameData.id,
            title: gameData.title,
            thumbnail: gameData.thumbnail,
            genre: gameData.genre,
            rating: null,
          },
        ];

        await coreApi.patch(
          "user/favorites",
          {
            favoriteGames: newData,
          },
          {
            headers: {
              auth: token as string,
            },
          }
        ); /* Atualiza o banco de dados */

        toast.success("Jogo adicionado com sucesso!");
        setFavoriteList(newData); /* Estado */
      } catch (error) {
        const requestError = error as AxiosError<iApiError>
        toast.error(requestError.response?.data.error);
      }
    } else {
      toast.warn("Este jogo já está cadastrado na lista.");
    }
  };

  const removeGame = async (clickedGame: iGame) => {
    if (confirm("Deseja excluir mesmo este item?")) {
      try {
        const newGameList = favoriteList.filter((game) => game.id !== clickedGame.id);
        const token = localStorage.getItem("@TOKEN");

        await coreApi.patch(
          "user/favorites",
          {
            favoriteGames: newGameList,
          },
          {
            headers: {
              auth: token as string,
            },
          }
        );

        toast.success("Jogo removido com sucesso!");
        setFavoriteList(newGameList);
      } catch (error) {
        const requestError = error as AxiosError<iApiError>
        toast.error(requestError.response?.data.error);
      }
    }

    if (favoriteList.length === 1) {
      localStorage.removeItem("@FAVORITE_LIST");
    }
  };

  const ratingGame = async (gameId: number, rating: number) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      
      const newFavoriteList = favoriteList.map((game) => {
        if (game.id === gameId) {
          return { ...game, rating: rating };
        } else {
          return game;
        }
      });

      await coreApi.patch(
        "user/favorites",
        {
          favoriteGames: newFavoriteList,
        },
        {
          headers: {
            auth: token as string,
          },
        }
      );

      toast.success("Avaliação realizada com sucesso!")
      setFavoriteList(newFavoriteList);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>
      toast.error(requestError.response?.data.error);
    }   
  };

  return (
    <GamesContext.Provider value={{ addGame, removeGame, ratingGame }}>
      {children}
    </GamesContext.Provider>
  );
};
