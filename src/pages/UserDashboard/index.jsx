import React, { useEffect, useState } from "react";
import FavoriteList from "../../components/FavoriteList";
import GameList from "../../components/GameList";
import { gameData } from "../../database";
import { StyledContainer } from "../../styles/global";
import { externalApi } from "../../services/api";
import { StyledTitle } from "../../styles/typography";

const UserDashboard = ({
  user,
  favoriteList,
  addGame,
  removeGame,
  ratingGame,
}) => {
  const [gameList, setGameList] = useState(gameData);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  const categories = gameList.map((game) => game.genre);
  const newCategories = [...new Set(categories)];

  const newFavoriteList = favoriteList.filter((game) =>
    filter === "" ? true : game.genre === filter
  );

  useEffect(() => {
    const getGameList = async () => {
      /* trycatch é uma estrutura que tentativa e erro, cada linha presente em try recebe uma tentativa de execução, caso haja erro, o código cai em catch */
      try {
        setLoading(true);
        const response = await externalApi.get("games");
        response.data.length = 24;
        setGameList(response.data);
      } catch (error) {
        console.log(error);
        /* finally é sempre executado independente de qualquer cenário */
      } finally {
        setLoading(false);
      }
    };
    getGameList();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Carregando</h1>
      ) : (
        <StyledContainer containerSize="large">
          <StyledTitle tag="h1" fontSize="one">
            {user.name}
          </StyledTitle>
          <div className="mainContainer">
            <FavoriteList
              gameList={newFavoriteList}
              removeGame={removeGame}
              ratingGame={ratingGame}
              categories={newCategories}
              filter={filter}
              setFilter={setFilter}
            />
            <GameList gameList={gameList} addGame={addGame} />
          </div>
        </StyledContainer>
      )}
    </>
  );
};

export default UserDashboard;
