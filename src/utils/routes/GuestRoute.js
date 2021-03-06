import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import AppContext from "../../store/AppContext";

function GuestRoute(props) {
  const [isLoggedIn] = useContext(AppContext);

  if (!isLoggedIn) return <Route {...props} />;

  return <Redirect to="/" />;
}

export default GuestRoute;
