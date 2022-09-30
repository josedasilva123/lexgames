/* eslint-disable no-restricted-globals */
import { useState, useEffect } from "react";

import GameList from "./components/GameList";
import FavoriteList from "./components/FavoriteList";

import { gameData } from "./database";
import { StyledContainer } from "./styles/global";
import { api } from "./services/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [gameList, setGameList] = useState(gameData);
  const [favoriteList, setFavoriteList] = useState([]);
  const [filter, setFilter] = useState("");

   /* pegando categorias da api e filtrando e removendo itens repetidos */
  const categories = gameList.map((game) => game.genre); 
  const newCategories = [...new Set(categories)]; 

  const newFavoriteList = favoriteList.filter((game) =>
    filter === "" ? true : game.genre === filter
  );

  /* useEffect de montagem realizando uma requição para alimentar a lista de games */
  useEffect(() => {
    const getGameList = async () => {
      /* trycatch é uma estrutura que tentativa e erro, cada linha presente em try recebe uma tentativa de execução, caso haja erro, o código cai em catch */
      try {
        setLoading(true);
        const response = await api.get("games");
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

  /* Efeito que carrega a lista de favoritos do localStorage */
  useEffect(() => {
    const localStorageList = localStorage.getItem("@FAVORITE_LIST");
    if (localStorageList) {
      setFavoriteList(JSON.parse(localStorageList));
    }
  }, []);


  /* Efeito que carrega armazena a lista de favoritos no localStorage a cada atualização */
  useEffect(() => {
    if (favoriteList.length) {
      localStorage.setItem("@FAVORITE_LIST", JSON.stringify(favoriteList));
    }
  }, [favoriteList]);

  
  function addGame(productData) {
    if (
      !favoriteList.find(
        (game) => game.title.toLowerCase() === productData.title.toLowerCase()
      )
    ) {
      setFavoriteList([...favoriteList, productData]);
    } else {
      alert("Este jogo já está cadastrado na lista.");
    }
  }

  function removeGame(clickedGame) {
    const newGameList = favoriteList.filter((game) => game !== clickedGame);

    if (confirm("Deseja excluir mesmo este item?")) {
      setFavoriteList(newGameList);
    }

    if (favoriteList.length === 1) {
      localStorage.removeItem("@FAVORITE_LIST");
    }
  }

  return (
    <div className="App">
      {loading ? (
        <h1>Carregando</h1>
      ) : (
        <StyledContainer containerSize="large">
          <div className="mainContainer">
            <GameList gameList={gameList} addGame={addGame} />
            <FavoriteList
              gameList={newFavoriteList}
              removeGame={removeGame}
              categories={newCategories}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
        </StyledContainer>
      )}
    </div>
  );
}

export default App;
