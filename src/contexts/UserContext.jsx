/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { coreApi } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

/* Cria o contexto, exporta lógica por meio do provider */

export const userActions = {
  setUser: "user/setUser",
  setTechs: "user/setFavoriteList",
}


export const userReducer = (state, action) => {
  switch(action.type){
    case userActions.setUser: 
      return action.payload
    case userActions.setFavoriteList:
      return { ...state, favoriteGames: action.payload }  
    default:
      return state  
  }
}

export const UserProvider = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState();
  /* definir multiplas regras de alteração de estado */
  const [user, dispatchUser] = useReducer(userReducer, null);
  const [currentRoute, setCurrentRoute] = useState(null);

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

          dispatchUser({ type: userActions.setUser, payload: response.data.user});
          navigate(currentRoute ? currentRoute : "/dashboard");
          
        } catch (error) {
          localStorage.removeItem("@TOKEN");
          navigate("/");
        } finally {
          setGlobalLoading(false);
        }
      }
    })();
  }, []);

  /* Botão de login */
  const userLogin = async (data, setLoading, callback) => {
    try {
      setLoading(true);
      const response = await coreApi.post("user/login", data);

      dispatchUser({ type: userActions.setUser, payload: response.data.user});
      
      localStorage.setItem("@TOKEN", response.data.token);
      navigate("/dashboard");
      if(callback){
        callback(response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    dispatchUser({ type: userActions.setUser, payload: null });
    navigate("/");
    localStorage.removeItem("@TOKEN");
  };

  const userRegister = async (data, setLoading) => {
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
  };

  /* export */
  return (
    <UserContext.Provider
      value={{
        user,
        dispatchUser,
        currentRoute,
        setCurrentRoute,
        userLogin,
        userRegister,
        userLogout,
        globalLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
