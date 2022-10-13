import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { StyledTitle } from '../../styles/typography';

const GlobalLoading = ({children}) => {
  const { globalLoading } = useContext(UserContext);

  return (
    <>
        {globalLoading ? (
            <StyledTitle tag="h1" fontSize="one">Carregando...</StyledTitle>
        ) : (
            <>
                {children}
            </>
        )}
    </>
  )
}

export default GlobalLoading 