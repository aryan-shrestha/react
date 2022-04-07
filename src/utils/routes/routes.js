import React from "react";
import Gallery from "../../pages/Gallery";
import Home from "../../pages/Home";
import Login from "../../pages/Login";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: null,
  },
  {
    path: "/gallery",
    component: () => <Gallery />,
    protected: "auth",
  },
  {
    path: "/login",
    component: () => <Login />,
    protected: "guest",
  },
];

export default routes;
