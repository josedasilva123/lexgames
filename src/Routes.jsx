import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";

const AppRoutes = ({
  user,
  setUser,
  favoriteList,
  setFavoriteList,
  addGame,
  removeGame,
  ratingGame,
}) => {
  return (
    <Routes>
      <Route
        index
        element={<Login setUser={setUser} setFavoriteList={setFavoriteList} />}
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <UserDashboard
            user={user}
            favoriteList={favoriteList}
            addGame={addGame}
            removeGame={removeGame}
            ratingGame={ratingGame}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
