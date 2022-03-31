import { useState, useEffect } from "react";
import Axios from "axios";

const api = process.env.REACT_APP_UNSPLASH_API;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

function useFetchImage(page, searchTerm) {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function fetch() {
    const url =
      searchTerm === null ? "photos?" : `search/photos?query=${searchTerm}&`;
    Axios.get(`${api}/${url}client_id=${secret}&page=${page}`)
      .then((res) => {
        if (searchTerm === null) {
          fetchRandom(res);
        } else {
          fetchSearch(res);
        }
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(["Unable to fetch Images"]);
        console.log(e.response);
        setIsLoading(false);
      });
  }

  function fetchSearch(res) {
    if (page > 1) {
      setImages([...images, ...res.data.results]);
    } else {
      setImages([...res.data.results]);
    }
  }

  function fetchRandom(res) {
    setImages([...images, ...res.data]);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch();
  }, [page, searchTerm]);

  return [images, setImages, errors, isLoading];
}

export default useFetchImage;
