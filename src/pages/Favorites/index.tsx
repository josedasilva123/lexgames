import React from 'react'
import FavoriteList from '../../components/PageComponents/FavoriteList'
import Header from '../../components/PageComponents/Header'
import { StyledContainer } from '../../styles/global'
import { StyledTitle } from '../../styles/typography'
import { StyledFavorites } from './style'

const Favorites = () => {
  return (
    <StyledFavorites>
         <Header />
         <StyledContainer containerSize='large'>
            <main className="mainContainer">
                <StyledTitle tag="h1" fontSize='one'>Meus Jogos Favoritos</StyledTitle>
                <FavoriteList />
            </main>
         </StyledContainer>
    </StyledFavorites>
   
  )
}

export default Favorites