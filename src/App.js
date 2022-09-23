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

  //Constante que produz uma nova lista com base no filtro selecionado
  //Se não houver filtro, espelha a gameList
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
    //Método find para ver se o item já está cadastrado na lista
    if (
      !gameList.find(
        (game) => game.name.toLowerCase() === formData.name.toLowerCase()
      )
    ) {
      setGameList([...gameList, formData]);
    } else {
      //Alerta em caso de erro
      alert("Este jogo já está cadastrado na lista.");
    }
  }

  function removeGame(clickedGame) {
    //Filtro retornando todos os itens, exceto o item clicado
    const newGameList = gameList.filter((game) => game !== clickedGame);

    //Metodo confirm para criar um alerta de confirmação
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
