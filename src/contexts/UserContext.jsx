/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { coreApi } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

/* Cria o contexto, exporta lógica por meio do provider */

export const UserProvider = ({ children }) => {
    const [globalLoading, setGlobalLoading] = useState();
    const [user, setUser] = useState(null);
    const [favoriteList, setFavoriteList] = useState([]);
    const [currentRoute, setCurrentRoute] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
      (async () => {
        const token = localStorage.getItem("@TOKEN");
        if(token){
          setGlobalLoading(true);
          try {
            const response = await coreApi.get("user/autologin", {
              headers: {
                auth: token,
              }
            })
            setUser(response.data.user);
            setFavoriteList(response.data.user.favoriteGames);
            navigate(currentRoute ? currentRoute : "/dashboard");
          } catch (error) {
            localStorage.removeItem("@TOKEN");
            navigate("/");
          } finally {
            setGlobalLoading(false);
          }
        }
      })();
    }, [])

    /* Botão de login */
    const userLogin = async (data, setLoading) => {
        try {
            setLoading(true);
            const response = await coreApi.post("user/login", data);
            setUser(response.data.user);
            setFavoriteList(response.data.user.favoriteGames);
            localStorage.setItem("@TOKEN", response.data.token);
            navigate("/dashboard");
          } catch (error) {
            console.log(error);
            toast.error(error.response.data.error);
          } finally {
            setLoading(false);
          }
    }

    const userLogout = () => {
        setUser(null);
        setFavoriteList([]);
        navigate("/");
        localStorage.removeItem("@TOKEN");
    }

    const userRegister = async(data, setLoading) => {
        try {
            setLoading(true);
            const response = await coreApi.post("user", data);
      
            toast.success(response.data.message);
      
            setTimeout(() => {
              navigate("/");
            }, 2500);
          } catch (error) {
            toast.error(error.response.data.error);
          } finally {
            setLoading(false);
          }
    }

    /* export */
    return(
        <UserContext.Provider value={{ user, favoriteList, setFavoriteList, currentRoute, setCurrentRoute, userLogin, userRegister, userLogout, globalLoading }}>
            {children}
        </UserContext.Provider>
    )
}