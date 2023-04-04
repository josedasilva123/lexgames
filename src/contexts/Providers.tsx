import React from "react";
import { CatalogProvider } from "./CatalogContext/CatalogContext";
import { GamesProvider } from "./GamesContext/GamesContext";
import { UserProvider } from "./UserContext";

interface iProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: iProvidersProps) => {
  return (
    <UserProvider>
      <CatalogProvider>
        <GamesProvider>{children}</GamesProvider>
      </CatalogProvider>
    </UserProvider>
  );
};

export default Providers;