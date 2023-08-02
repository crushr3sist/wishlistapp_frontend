import "./styles.scss";
import Button from "@mui/material/Button";
import { Card, TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";

const registerComponent = () => {
  return (
    <div className="mainContainer">
      <Card className="regCard">
        <CardContent>
          <div className="contentCard">
            <h1 className="title">Register</h1>
            <TextField
              required
              className="textFields"
              id="outlined-required"
              label="Required"
              autoComplete="current-username"
            />

            <TextField
              required
              className="textFields"
              id="outlined-email-input"
              label="email"
              type="email"
              autoComplete="current-password"
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

export default registerComponent;
