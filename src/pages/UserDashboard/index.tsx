import React, { useContext } from "react";
import Header from "../../components/PageComponents/Header";
import FavoriteList from "../../components/FavoriteList";
import GameList from "../../components/PageComponents/GameList";
import { StyledContainer } from "../../styles/global";
import { CatalogContext } from "../../contexts/CatalogContext/CatalogContext";

const UserDashboard = () => {
  const { loading } = useContext(CatalogContext);

  return (
    <>
      {loading ? (
        <h1>Carregando</h1>
      ) : (
        <>
          <Header />
          <StyledContainer containerSize="large">
            <div className="mainContainer">
              <FavoriteList />
              <GameList />
            </div>
          </StyledContainer>
        </>
      )}
    </>
  );
};

export default UserDashboard;
