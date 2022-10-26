/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext'

const ProtectedRoutes = () => {
  const { user, setCurrentRoute } = useContext(UserContext);
  const navigate = useNavigate();

  const pathname = window.location.pathname;
  
  useEffect(() => {
    if(!user){
        if(pathname !== "/"){
          setCurrentRoute(pathname);
        }        
        navigate("/");
    }
  }, [])

  return (
    <>
        {user && <Outlet />}        
    </>
  )
}

export default ProtectedRoutes