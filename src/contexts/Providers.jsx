import React from 'react'
import { GamesProvider } from './GamesContext'
import { UserProvider } from './UserContext'

const Providers = ({children}) => {
  return (
    <UserProvider>
        <GamesProvider>
            {children}
        </GamesProvider>
    </UserProvider>
  )
}

export default Providers