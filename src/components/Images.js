import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchImage from "../utils/hooks/useFetchImage";
import Image from "../components/Image";
import Loading from "./Loading";
import useDebounce from "../utils/hooks/useDebounce";

function Images() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [images, setImages, errors, isLoading] = useFetchImage(
    page,
    searchTerm
  );

  // deletes image
  function handleRemove(index) {
    setImages(images.filter((image, i) => i !== index));
  }

  function ShowImage() {
    return (
      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        className="images-container"
      >
        {images.map((img, index) => {
          return (
            <Image image={img} handleRemove={handleRemove} index={index} />
          );
        })}
      </InfiniteScroll>
    );
  }

  const debounce = useDebounce();
  function handleInput(e) {
    const text = e.target.value;
    debounce(() => setSearchTerm(text), 1000);
  }

  return (
    <section>
      <div className="input-container">
        <input
          type="text"
          onChange={handleInput}
          className="input-field"
          placeholder="search...."
        />
        <button className="search-btn">Search</button>
      </div>
      {errors.errors ? (
        <p style={{ textAlign: "center" }}>Could not fetch data </p>
      ) : null}
      <ShowImage />
      {isLoading && <Loading />}
    </section>
  );
}

export default Images;
