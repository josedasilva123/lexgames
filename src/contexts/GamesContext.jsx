/* eslint-disable no-restricted-globals */
import { createContext, useContext } from "react";
import { coreApi } from "../services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const GamesContext = createContext({});

export const GamesProvider = ({ children }) => {
  const { favoriteList, setFavoriteList } = useContext(UserContext);

  const addGame = async (gameData) => {
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
              auth: token,
            },
          }
        );

        toast.success("Nota adicionada com sucesso!");
        setFavoriteList(newData);
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
        const newGameList = favoriteList.filter((game) => game !== clickedGame);
        const token = localStorage.getItem("@TOKEN");

        await coreApi.patch(
          "user/favorites",
          {
            favoriteGames: newGameList,
          },
          {
            headers: {
              auth: token,
            },
          }
        );

        toast.success("Nota adicionada com sucesso!");
        setFavoriteList(newGameList);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    }

    if (favoriteList.length === 1) {
      localStorage.removeItem("@FAVORITE_LIST");
    }
  };

  const ratingGame = async (gameId, rating) => {
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
            auth: token,
          },
        }
      );

      setFavoriteList(newFavoriteList);
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
