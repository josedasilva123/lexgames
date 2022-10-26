import { iLoginFormData } from "../../pages/Login";
import { iRegisterFormData } from "../../pages/Register";
import { iUser, iGame } from "../@types/types";

export interface iLoginResponse {
  user: iUser;
  token: string;
}

export interface iUserContext {
  user: iUser | null;
  favoriteList: iGame[];
  setFavoriteList: React.Dispatch<React.SetStateAction<iGame[]>>;
  currentRoute: string | null;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
  userLogin: (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    callback: (response: iLoginResponse) => void
  ) => void;
  userLogout: () => void;
  userRegister: (
    data: iRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  globalLoading: boolean;
}
