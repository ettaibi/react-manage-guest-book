import React from "react";
import { Container, CssBaseline } from "@material-ui/core";

export default function SimpleContainer({ children, ...props }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        style={{
          backgroundColor: "#cfe8fc",
          padding: "30px",
          borderRadius: "25px"
        }}
        {...props}
      >
        {children}
      </Container>
    </React.Fragment>
  );
}
