// import React, { Component } from "react";

import React, { useState, useEffect, useRef } from "react";

import Images from "./components/Images";
import "./assets/css/style.css";

function App() {
  const [title, setTitle] = useState("hello React Hooks");
  const [isShowing, setIsShowing] = useState(false);
  const mountRef = useRef(false);

  // component did mount only if empty array is passed
  useEffect(() => {
    console.log("app mounted");
  }, []);

  // useEffect for component did update
  useEffect(() => {
    if (mountRef.current) {
      console.log("App updated");
    } else {
      mountRef.current = true;
    }
  }, [isShowing]);

  function handleClick() {
    setIsShowing(!isShowing);
  }

  return (
    <section className="flex justify-center">
      {console.log("app re-rendered")}
      <div className="w-1/2">
        <div className="text-center">
          <div className="my-4">{title}</div>
          <button
            className="p-1 my-2 bg-blue-700 text-white"
            onClick={handleClick}
          >
            Toggle Image
          </button>
        </div>

        {isShowing ? <Images /> : null}
      </div>
    </section>
  );
}

export default App;

// export default class App extends Component {
//   constructor(props) {
//     console.log("App Constructor");

//     super(props);
//     this.state = { title: "Hello React State", isShowing: false };
//   }

//   componentDidMount() {
//     console.log("App Mounted");
//     this.setState({ title: "hello lifecycle" });
//   }

//   handleClick = () => {
//     this.setState({ isShowing: !this.state.isShowing });
//   };

//   render() {
//     console.log("App Render");
//     return (
//       <section className="flex justify-center">
//         <div className="w-1/2">
//           <div className="text-center">
//             <div className="my-4">{this.state.title}</div>
//             <button
//               className="p-1 my-2 bg-blue-700 text-white"
//               onClick={this.handleClick}
//             >
//               Toggle Image
//             </button>
//           </div>
//           {this.state.isShowing ? <Images /> : null}
//         </div>
//       </section>
//     );
//   }
// }
