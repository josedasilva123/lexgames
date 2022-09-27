/* eslint-disable no-restricted-globals */
import { useState, useEffect } from "react";
import AddGameForm from "./components/AddGameForm";
import GameList from "./components/GameList";
import "./styles/index.css";
import gridStyle from "./styles/modules/grid.module.css";

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
      <div className="container large">
        <div className={gridStyle.mainContainer}>
          <GameList
            gameList={newGameList}
            removeGame={removeGame}
            categories={categories}
            filter={filter}
            setFilter={setFilter}
          />
          <AddGameForm categories={categories} addGame={addGame} />
        </div>
      </div>
    </div>
  );
}

export default App;
