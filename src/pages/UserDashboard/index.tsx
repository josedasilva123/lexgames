import React, { useContext, useEffect, useState } from "react";
import FavoriteList from "../../components/FavoriteList";
import GameList from "../../components/GameList";
import { gameData } from "../../database";
import { StyledContainer } from "../../styles/global";
import { externalApi } from "../../services/api";
import { UserContext } from "../../contexts/UserContext";
import { iGame } from "../../contexts/types/types";
import Header from "../../components/Header";

const UserDashboard = () => {
  const { favoriteList } = useContext(UserContext);
  const [gameList, setGameList] = useState<iGame[]>(gameData);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  const categories = gameList.map((game) => game.genre);
  const newCategories = [...new Set(categories)];

  const newFavoriteList = favoriteList.filter((game) =>
    filter === "" ? true : game.genre === filter
  );

  useEffect(() => {
    const getGameList = async () => {
      try {
        setLoading(true);
        const response = await externalApi.get("games");
        response.data.length = 24;
        setGameList(response.data);
      } catch (error) {
        console.log(error);
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
        <>
          <Header />
          <StyledContainer containerSize="large">
            <div className="mainContainer">
              <FavoriteList
                gameList={newFavoriteList}
                categories={newCategories}
                filter={filter}
                setFilter={setFilter}
              />
              <GameList gameList={gameList} />
            </div>
          </StyledContainer>
        </>
      )}
    </>
  );
};

export default UserDashboard;
