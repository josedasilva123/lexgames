import { createContext, useEffect, useState } from "react";
import { gameData } from "../../database";
import { externalApi } from "../../services/api";
import { iDefaultContextProps, iGame } from "../@types/types";
import { iCatalogContext } from "./types";

export const CatalogContext = createContext({} as iCatalogContext);

export const CatalogProvider = ({children}: iDefaultContextProps) => {
    const [loading, setLoading] = useState(false);
    const [gameList, setGameList] = useState<iGame[]>(gameData);   
  
    const categories = gameList.map((game) => game.genre);
    const newCategories = [...new Set(categories)]; 
  
    useEffect(() => {
      const getGameList = async () => {
        try {
          setLoading(true);
          const response = await externalApi.get("games");
          setGameList(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      getGameList();
    }, []);
    
    return(
        <CatalogContext.Provider value={{ loading, gameList, newCategories }}>
            {children}
        </CatalogContext.Provider>
    )
}