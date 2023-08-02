import React from "react";
import "./styles.scss";
import Button from "@mui/material/Button";
import { Card, TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";

const loginComponent = () => {
  return (
    <div className="mainContainer">
      <Card className="regCard">
        <CardContent>
          <div className="contentCard">
            <TextField
              required
              className="textFields"
              id="outlined-required"
              label="Required"
              defaultValue="Username"
              sx={{ input: { color: "white" } }}
              autoComplete="current-username"
            />

            <TextField
              required
              className="textFields"
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />

            <Button variant="contained" onClick={() => {}}>
              Register
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default loginComponent;
