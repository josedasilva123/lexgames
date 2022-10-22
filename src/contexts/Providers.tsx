import React from 'react'
import { GamesProvider } from './GamesContext/GamesContext'
import { UserProvider } from './UserContext'

interface iProvidersProps{
  children: React.ReactNode;
}

const Providers = ({children}: iProvidersProps) => {
  return (
    <UserProvider>
        <GamesProvider>
            {children}
        </GamesProvider>
    </UserProvider>
  )
}

export default Providers