import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./utils/routes";
import "./assets/css/style.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="app">
      {/* <Router>
        <Switch>
          {routes.map((route) => {
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
            />;
          })}
        </Switch>
      </Router> */}
      <Router>
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
