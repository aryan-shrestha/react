import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchImage from "../utils/hooks/useFetchImage";
import Image from "../components/Image";
import Loading from "./Loading";

function Images() {
  const [page, setPage] = useState(1);
  const [images, setImages, errors, isLoading] = useFetchImage(page);

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

  // if (isLoading) return <Loading />;
  return (
    <section>
      {errors[0]}

      <ShowImage />

      {isLoading && <Loading />}
    </section>
  );
}

export default Images;
