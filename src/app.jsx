import React from "react";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
export default function App() {
  return (
    <Container>
      <Switch>
          <Route path="/" component={Home} />
      </Switch>
    </Container>
  );
}
