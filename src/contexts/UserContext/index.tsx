/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { coreApi } from "../../services/api";
import { toast } from "react-toastify";
import { iLoginFormData } from "../../pages/Login";
import { AxiosError } from "axios";
import { iRegisterFormData } from "../../pages/Register";
import { iUser, iGame, iApiError, iDefaultContextProps } from "../@types/types";
import { iUserContext, iLoginResponse } from "./types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultContextProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);
  const [favoriteList, setFavoriteList] = useState([] as iGame[]);
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);

  const navigate = useNavigate(); 

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN"); 
      if (token) {
        setGlobalLoading(true);
        try {
          const response = await coreApi.get("user/autologin", {
            headers: {
              auth: token,
            },
          });

          setUser(response.data.user);
          setFavoriteList(response.data.user.favoriteGames);
        } catch (error) {
          localStorage.removeItem("@TOKEN");
          navigate("/");
        } finally {
          setGlobalLoading(false);
        }
      }
    })();
  }, []);

  const userLogin = async (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    callback: (response: iLoginResponse) => void
  ) => {
    try {
      setLoading(true);
      const response = await coreApi.post<iLoginResponse>("user/login", data);

      setUser(response.data.user);
      setFavoriteList(response.data.user.favoriteGames);

      localStorage.setItem("@TOKEN", response.data.token); 
      if (callback) {
        callback(response.data);
      }
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    setFavoriteList([]);
    navigate("/");
    localStorage.removeItem("@TOKEN");
  };

  const userRegister = async (
    data: iRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await coreApi.post("user", data);

      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        favoriteList,
        setFavoriteList,
        currentRoute,
        setCurrentRoute,
        userLogin,
        userLogout,
        userRegister,        
        globalLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
