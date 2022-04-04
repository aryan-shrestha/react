import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./utils/routes";
import "./assets/css/style.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
