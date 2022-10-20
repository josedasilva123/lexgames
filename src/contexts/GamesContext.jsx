/* eslint-disable no-restricted-globals */
import { createContext, useContext } from "react";
import { coreApi } from "../services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { userActions } from "./UserContext";

export const GamesContext = createContext({});

export const GamesProvider = ({ children }) => {
  const { user, dispatchUser } = useContext(UserContext);

  const addGame = async (gameData) => {
    if (!user?.favoriteGames.find((game) => game.id === gameData.id)) {
      try {
        const token = localStorage.getItem("@TOKEN");

        const newFavoriteList = [
          ...user?.favoriteGames,
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
            favoriteGames: newFavoriteList,
          },
          {
            headers: {
              auth: token,
            },
          }
        ); /* Atualiza o banco de dados */

        toast.success("Jogo adicionado com sucesso!");
        dispatchUser({ type: userActions.setFavoriteList, payload: newFavoriteList });
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    } else {
      toast.alert("Este jogo já está cadastrado na lista.");
    }
  };

  const removeGame = async (clickedGame) => {
    if (confirm("Deseja excluir mesmo este item?")) {
      try {
        const newFavoriteList = user?.favoriteGames.filter((game) => game.id !== clickedGame.id);
        const token = localStorage.getItem("@TOKEN");
         
        await coreApi.patch(
          "user/favorites",
          {
            favoriteGames: newFavoriteList,
          },
          {
            headers: {
              auth: token,
            },
          }
        );

        toast.success("Jogo removido com sucesso!");
        dispatchUser({ type: userActions.setFavoriteList, payload: newFavoriteList });
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    }

    if (user?.favoriteGames.length === 1) {
      localStorage.removeItem("@FAVORITE_LIST");
    }
  };

  const ratingGame = async (gameId, rating) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      
      const newFavoriteList = user?.favoriteGames.map((game) => {
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
            auth: token,
          },
        }
      );

      toast.success("Avaliação realizada com sucesso!");
      dispatchUser({ type: userActions.setFavoriteList, payload: newFavoriteList });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }   
  };

  return (
    <GamesContext.Provider value={{ addGame, removeGame, ratingGame }}>
      {children}
    </GamesContext.Provider>
  );
};
