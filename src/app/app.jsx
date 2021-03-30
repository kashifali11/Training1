import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Route, BrowserRouter as Router , Switch } from "react-router-dom";
import Home from "./container/home.jsx";
import Settings from "./container/settings.jsx";
import CustomAppBar from "./components/common/appBar/appBar.jsx";
import Store from "./redux/store";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/common/errorBoundry/errorBoundary.jsx";
const useStyles = makeStyles({
  container: {
    marginLeft: 50,
    marginTop: 90,
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <ErrorBoundary>
      <Provider store={Store}>
        <Router>
          <React.StrictMode>
            <Container className={classes.container}>
              <CustomAppBar />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/settings" component={Settings} />
              </Switch>
            </Container>
          </React.StrictMode>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}
