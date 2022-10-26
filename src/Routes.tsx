import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Favorites from "./pages/Favorites";
import PublicLoginRoutes from "./components/PublicLoginRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLoginRoutes />}>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>   

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
