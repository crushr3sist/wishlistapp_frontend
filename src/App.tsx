import React from "react";
import AuthRules, { RequireToken } from "./auth/token_handler";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import LandingPage from "./landingPage";
import "../sass/index.scss";
import Priv from "./auth/priv";
import Logout from "./auth/logout";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <AuthRules>
              s<LandingPage />
            </AuthRules>
          }
        />

        <Route
          path="/login"
          element={
            <AuthRules>
              <Login />
            </AuthRules>
          }
        />

        <Route
          path="/register"
          element={
            <AuthRules>
              <Register />
            </AuthRules>
          }
        />
        <Route
          path="/priv"
          element={
            <RequireToken>
              <Priv />
            </RequireToken>
          }
        />
        <Route
          path="/logout"
          element={
            <RequireToken>
              <Logout />
            </RequireToken>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
