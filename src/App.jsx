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

  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  useEffect(() => {
    window.history.pushState("","", currentPath);
  }, [currentPath])

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

  function addGame(gameData) {
    if (!favoriteList.find((game) => game.id === gameData.id)) {
      setFavoriteList([...favoriteList, gameData]);
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

  function ratingGame(gameId, rating){    
    const newFavoriteList = favoriteList.map(game => {
      if(game.id === gameId){
        return { ...game, rating: rating}
      } else {
        return game;
      }
    })
    setFavoriteList(newFavoriteList);
  }

  return (
    <div className="App">
      <button onClick={() => setCurrentPath('/home')}>
        Home
      </button>
      <button onClick={() => setCurrentPath('/contato')}>
        Contato
      </button>
      {loading ? (
        <h1>Carregando</h1>
      ) : (
        <>
        {currentPath === "/home" && (
          <StyledContainer containerSize="large">
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
        {currentPath === "/contato" && <h1 style={{ color: "#FFF"}}>Contato</h1>}
        </>
        
        
      )}
    </div>
  );
}

export default App;
