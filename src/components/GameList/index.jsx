import React from 'react'
import GameCard from './GameCard'
import GameFilters from './GameFilters'

const GameList = ({ gameList, removeGame, categories, setFilter }) => {
  return (
    <>
        <GameFilters categories={categories} setFilter={setFilter} />
        {gameList.length ? (
            <ul>
            {gameList.map((game, index) => (
                <GameCard key={index} game={game} removeGame={removeGame} />
            ))}
            </ul>
        ) : (
            <h1>
                Não foi cadastrado nenhum jogo nesta lista.
            </h1>
        )}
        
    </>
    
  )
}

export default GameList