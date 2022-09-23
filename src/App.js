/* eslint-disable no-restricted-globals */
import { useState } from "react";
import AddGameForm from "./components/AddGameForm";
import GameList from "./components/GameList";

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
  ]);

  const [filter, setFilter] = useState(""); //Qual filtro está selecionado no momento

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
      {filter}
      <GameList
        gameList={newGameList}
        removeGame={removeGame}
        categories={categories}
        setFilter={setFilter}
      />
      <AddGameForm categories={categories} addGame={addGame} />
    </div>
  );
}

export default App;
