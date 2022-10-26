import { iGame } from "../types/types";

export interface iCatalogContext{
    loading: boolean;
    gameList: iGame[];
    newCategories: string[];
}
