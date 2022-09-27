import React from 'react'
import { StyledTitle } from '../../styles/typography';
import GameCard from './GameCard'
import GameFilters from './GameFilters'
import styles from "./style.module.css";

const GameList = ({ gameList, removeGame, categories, filter, setFilter }) => {
  return (
    <div className={styles.outerGrid}>
        <GameFilters categories={categories} filter={filter} setFilter={setFilter} />
        {gameList.length ? (
            <ul className={styles.gameList}>
            {gameList.map((game, index) => (
                <GameCard key={index} game={game} removeGame={removeGame} />
            ))}
            </ul>
        ) : (
            <StyledTitle fontSize="one">
                Não foi encontrado nenhum jogo.
            </StyledTitle>
        )}        
    </div>
    
  )
}

export default GameList