import Axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import useFetchImage from "../utils/hooks/useFetchImage";
import useScroll from "../utils/hooks/useScroll";

function Images() {
  const [newImageUrl, setNewImageUrl] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useFetchImage(page);
  const inputRef = useRef(null);
  function handleRemove(index) {
    setImages(images.filter((image, i) => i !== index));
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function ShowImage() {
    return images.map((image, index) => {
      return (
        <div
          className="p-2 my-4 flex justify-center"
          key={images.indexOf(image)}
        >
          <div className="relative">
            <i
              className="fas fa-times absolute right-0 cursor-pointer text-gray-300 hover:text-gray-50"
              onClick={() => {
                handleRemove(index);
              }}
            ></i>
            <img src={image.urls.regular} width="100%" height="auto" />
          </div>
        </div>
      );
    });
  }

  function handleChange(event) {
    setNewImageUrl(event.target.value);
  }

  return (
    <section>
      <div className="flex justify-center my-4">
        <input
          type="text"
          className="p-1 m-1 border border-gray-800 shadow rounded ml-4"
          value={newImageUrl}
          onChange={handleChange}
          ref={inputRef}
        />
        <button
          className={`p-2  text-white rounded ${
            newImageUrl !== "" ? "bg-green-600" : "bg-green-300"
          }`}
          disabled={newImageUrl === ""}
        >
          Add New
        </button>
      </div>
      <div className="gap-0" style={{ columnCount: 5 }}>
        <ShowImage />
      </div>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Load More
      </button>
    </section>
  );
}

export default Images;
