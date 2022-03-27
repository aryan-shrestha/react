import React, { useState } from "react";

function Images() {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1648229092256-c681fa5605e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=307&q=80",
    "https://images.unsplash.com/photo-1648240604291-14bee684e8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1648240726799-b05ee44bf698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1648228561581-833582029c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80",
    "https://images.unsplash.com/photo-1648258457541-ea06dd552055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  ]);

  function ShowImage() {
    return images.map((image) => {
      return (
        <div className="w-1/3">
          <img src={image} alt="" />
        </div>
      );
    });
  }

  function handleAdd() {
    setImages([
      ...images,
      "https://images.unsplash.com/photo-1648218014510-300a667c1582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ]);
  }
  return (
    <section>
      <div className="flex justify-center flex-wrap">
        <ShowImage />
      </div>
      <div className="flex justify-between my-4">
        <input
          type="text"
          className="p-2 border border-gray-800 shadow rounded"
        />
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>
          Add New
        </button>
      </div>
    </section>
  );
}

export default Images;

// export default class Images extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { interval: null };
//   }

//   componentDidMount() {
//     this.setState({
//       interval: setInterval(() => {
//         console.log("images comp mounted");
//       }, 1000),
//     });
//   }

//   componentDidUpdate() {
//     console.log("app updated");
//   }

//   componentWillUnmount() {
//     console.log("Images component unmounted");
//     clearInterval(this.state.interval);
//   }

//   render() {
//     return (
//       <img
//         src="https://images.unsplash.com/photo-1648198476196-3ee31b15027d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
//         alt="image"
//       />
//     );
//   }
// }
