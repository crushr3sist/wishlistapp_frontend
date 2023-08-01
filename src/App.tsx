import React from "react";
import LoggedInChecker from "./auth/token_handler";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import LandingPage from "./landingPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/login"
          element={
            <LoggedInChecker>
              <Login />
            </LoggedInChecker>
          }
        />

        <Route
          path="/register"
          element={
            <LoggedInChecker>
              <Register />
            </LoggedInChecker>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
