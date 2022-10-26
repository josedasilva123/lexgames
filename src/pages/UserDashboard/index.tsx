import React, { useContext } from "react";
import Header from "../../components/PageComponents/Header";
import GameList from "../../components/PageComponents/GameList";
import { StyledContainer } from "../../styles/global";
import { CatalogContext } from "../../contexts/CatalogContext/CatalogContext";
import { StyledTitle } from "../../styles/typography";
import { StyledUserDashboard } from "./style";

const UserDashboard = () => {
  const { loading } = useContext(CatalogContext);

  return (
    <StyledUserDashboard>
      {loading ? (
        <h1>Carregando</h1>
      ) : (
        <>
          <Header />
          <StyledContainer containerSize="large">
            <div className="mainContainer">
              <StyledTitle tag="h1" fontSize="one">
                Adicione jogos a lista de favoritos
              </StyledTitle>
              <GameList />
            </div>
          </StyledContainer>
        </>
      )}
    </StyledUserDashboard>
  );
};

export default UserDashboard;
