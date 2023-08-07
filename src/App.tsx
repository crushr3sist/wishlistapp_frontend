import React from "react";
import { NonPrivRoutes, PrivRoutes } from "./auth/token_handler";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import LandingPage from "./landingPage";
import "../sass/index.scss";
import "../src/wishes/index.css";
import Priv from "./auth/priv";
import Logout from "./auth/logout";
import UserDashboard from "./wishes/userDashboard";
import { Wishlists } from "./wishes/wishlists";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <NonPrivRoutes>
              <LandingPage />
            </NonPrivRoutes>
          }
        />

        <Route
          path="/login"
          element={
            <NonPrivRoutes>
              <Login />
            </NonPrivRoutes>
          }
        />

        <Route
          path="/register"
          element={
            <NonPrivRoutes>
              <Register />
            </NonPrivRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivRoutes>
              <UserDashboard />
            </PrivRoutes>
          }
        />
        <Route
          path="/wishlists"
          element={
            // <PrivRoutes>
            <Wishlists />
            // </PrivRoutes>
          }
        />
        <Route
          path="/logout"
          element={
            <PrivRoutes>
              <Logout />
            </PrivRoutes>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
