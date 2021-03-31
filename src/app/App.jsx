import React, { useEffect } from "react";
import { Container as AppLayout, makeStyles } from "@material-ui/core";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./container/Home.jsx";
import Settings from "./container/Settings.jsx";
import Store from "./redux/store";
import { Provider } from "react-redux";
import { fetchPeople } from "./redux/actions/peopleActions";
import AppErrorBoundary from "./components/common/errorBoundry/ErrorBoundary.jsx";
const useStyles = makeStyles({
  container: {
    marginLeft: 50,
    marginTop: 90,
  },
});

export default function App() {
  const nationality = Store.getState().settingReducer.nationality;
  const dispatch = Store.dispatch;
  useEffect(() => {
    dispatch(fetchPeople(1, nationality, 100));
  }, []);
  const classes = useStyles();
  return (
    <Provider store={Store}>
      <Router>
        <React.StrictMode>
          <AppErrorBoundary>
            <AppLayout className={classes.container}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/settings" component={Settings} />
              </Switch>
            </AppLayout>
          </AppErrorBoundary>
        </React.StrictMode>
      </Router>
    </Provider>
  );
}
