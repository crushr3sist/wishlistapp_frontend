import React, { useState } from "react";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import { Card, TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import { addToken } from "../slices/tokenStore";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  const loginUser = async (username: string, password: string) => {
    await axios
      .post(
        "http://localhost:8000/users/login",
        new URLSearchParams({
          username: username,
          password: password,
        })
      )
      .then(async (e) => {
        console.log(e.data.access_token);
        await dispatch(addToken(e.data.access_token));
        navigation("/priv");
      });
  };

  return (
    <div className="mainContainer">
      <Card className="regCard">
        <CardContent>
          <div className="contentCard">
            <TextField
              required
              className="textFields"
              id="outlined-required"
              label="username"
              sx={{ input: { color: "white" } }}
              autoComplete="current-username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <TextField
              required
              className="textFields"
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              variant="contained"
              onClick={() => {
                try {
                  loginUser(username, password);
                } catch {
                  console.log("there was an error");
                }
              }}
            >
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginComponent;
