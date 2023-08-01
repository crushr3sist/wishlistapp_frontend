import * as React from "react";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
const registerComponent = () => {
  return (
    <div style={{ position: "fixed", padding: "50px" }}>
      <Card
        style={{
          // minWidth: "70vw",
          // minHeight: "85vh",
          height: "80vh",
          width: "80vw",

          backgroundColor: "#1111",
        }}
      >
        <CardContent>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button variant="contained" style={{}} onClick={() => {}}>
              Register
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default registerComponent;
