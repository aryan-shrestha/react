import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./config/firebase";

import routes from "./utils/routes";
import "./assets/css/style.css";
import Header from "./components/Header";
import AppContext from "./store/AppContext";
import { Redirect } from "react-router-dom";

function App() {
  const auth = getAuth(app);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        console.log(user);
      } else {
        setUser({});
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <AppContext.Provider value={[isLoggedIn, user]}>
          <Header />
          <Switch>
            {routes.map((route) => {
              if(route.path === '/login'){
                if (isLoggedIn) return <Redirect to="/">
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
