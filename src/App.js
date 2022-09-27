/* eslint-disable no-restricted-globals */
import { useState } from "react";
import AddGameForm from "./components/AddGameForm";
import GameList from "./components/GameList";
import { StyledContainer } from "./styles/global";

function App() {
  const [gameList, setGameList] = useState([
    {
      name: "League of Legends",
      category: "MOBA",
    },
    {
      name: "DOTA 2",
      category: "MOBA",
    },
    {
      name: "Counter-Strike GO",
      category: "FPS",
    },
    {
      name: "Valorant",
      category: "FPS",
    },
    {
      name: "Genshin Impact",
      category: "RPG",
    }
  ]);

  const [filter, setFilter] = useState("");

  const newGameList = gameList.filter((game) =>
    filter === "" ? true : game.category === filter
  );

  const categories = [
    "FPS",
    "MOBA",
    "RPG",
    "Survive",
    "Soulslike",
    "Plataform",
    "Adventure",
    "Indie",
    "MMO"
  ];

  function addGame(formData) {
    if (
      !gameList.find(
        (game) => game.name.toLowerCase() === formData.name.toLowerCase()
      )
    ) {
      setGameList([...gameList, formData]);
    } else {
      alert("Este jogo já está cadastrado na lista.");
    }
  }

  function removeGame(clickedGame) {
    const newGameList = gameList.filter((game) => game !== clickedGame);

    if (confirm("Deseja excluir mesmo este item?")) {
      setGameList(newGameList);
    }
  }

  return (
    <div className="App">
      <StyledContainer containerSize="large">
        <div className="mainContainer">
          <GameList
            gameList={newGameList}
            removeGame={removeGame}
            categories={categories}
            filter={filter}
            setFilter={setFilter}
          />
          <AddGameForm categories={categories} addGame={addGame} />
        </div>
      </StyledContainer>
    </div>
  );
}

export default App;
