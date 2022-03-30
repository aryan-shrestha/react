import { useState, useEffect } from "react";
import Axios from "axios";
import { data } from "autoprefixer";

const url = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

function useFetchImage(page) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Axios.get(`${url}?client_id=${secret}&page=${page}`).then((res) => {
      setImages([...images, ...res.data]);
    });
  }, [page]);

  return [images, setImages];
}

export default useFetchImage;
