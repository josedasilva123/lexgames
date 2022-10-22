import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<UserDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
