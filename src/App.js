import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./config/firebase";

import Header from "./components/Header";
import AppContext from "./store/AppContext";
import routes from "./utils/routes/routes";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";

import "./assets/css/style.css";
import Loading from "./components/Loading";

function App() {
  const auth = getAuth(app);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="app">
      <Router>
        <AppContext.Provider value={[isLoggedIn, user]}>
          <Header />
          <Switch>
            {routes.map((route) => {
              if (route.protected === "guest") {
                return (
                  <GuestRoute
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                );
              }

              if (route.protected === "auth") {
                return (
                  <AuthRoute
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                );
              }
              return (
                <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;
