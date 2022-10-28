import React from "react";
import { iGame } from "../@types/types";

export interface iCatalogContext{
    loading: boolean;
    gameList: iGame[];
    renderGameList: iGame[];
    renderCount: number;    
    setRenderCount: React.Dispatch<React.SetStateAction<number>>
    newCategories: string[];
}
