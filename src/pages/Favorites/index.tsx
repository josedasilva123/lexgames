import React from 'react'
import FavoriteList from '../../components/FavoriteList'
import Header from '../../components/PageComponents/Header'
import { StyledContainer } from '../../styles/global'
import { StyledTitle } from '../../styles/typography'

const Favorites = () => {
  return (
    <>
         <Header />
         <StyledContainer>
            <main>
                <StyledTitle tag="h1" fontSize='one'>Meus Jogos Favoritos</StyledTitle>
                <FavoriteList />
            </main>
         </StyledContainer>
    </>
   
  )
}

export default Favorites