import React from 'react'

const GameList = ({gameList, addGame}) => {
  return (
    <ul>
        {gameList.map(game => (
           <li key={game.id}>
                <img src={game.thumbnail} alt={game.title} />
                <h3>{game.title}</h3>
                <p>{game.short_description}</p>
                <button onClick={() => addGame(game)}>Adicionar</button>
           </li> 
        ))}
    </ul>
  )
}

export default GameList