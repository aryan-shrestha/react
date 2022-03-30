// import React, { Component } from "react";

import React, { useState } from "react";

import Images from "./components/Images";
import "./assets/css/style.css";

function App() {
  const [title, setTitle] = useState("hello React Hooks");

  return (
    <section className="flex justify-center">
      {console.log("app re-rendered")}
      <div className="w-10/12">
        <div className="text-center">
          <div className="my-4">{title}</div>
          <Images />
        </div>
      </div>
    </section>
  );
}

export default App;
