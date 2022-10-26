/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

const PublicLoginRoutes = () => {
  const { user, currentRoute } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if(user){
        navigate(currentRoute ? currentRoute : "/dashboard")
    }
  }, [user])
     
  return (
    <Outlet />
  )
}

export default PublicLoginRoutes;