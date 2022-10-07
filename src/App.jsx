/* eslint-disable no-restricted-globals */
import { useState } from "react";
import UserDashboard from "./pages/UserDashboard";
import AppRoutes from "./Routes";

function App() {
  const [user, setUser] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  /*
  useEffect(() => {
    const localStorageList = localStorage.getItem("@FAVORITE_LIST");
    if (localStorageList) {
      setFavoriteList(JSON.parse(localStorageList));
    }
  }, []);
 
  useEffect(() => {
    if (favoriteList.length) {
      localStorage.setItem("@FAVORITE_LIST", JSON.stringify(favoriteList));
    }
  }, [favoriteList]);
  */

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

  function ratingGame(gameId, rating) {
    const newFavoriteList = favoriteList.map((game) => {
      if (game.id === gameId) {
        return { ...game, rating: rating };
      } else {
        return game;
      }
    });
    setFavoriteList(newFavoriteList);
  }

  return (
    <div className="App">
      <AppRoutes
        user={user}
        setUser={setUser}        
        favoriteList={favoriteList}
        setFavoriteList={setFavoriteList}
        addGame={addGame}
        removeGame={removeGame}
        ratingGame={ratingGame}
      />
    </div>
  );
}

export default App;
