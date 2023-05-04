import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dt) => setData(dt))
      .catch((e) => {
        setError(e);
      });
  }, [url]);

  return { data, error };
};

export default useFetch;
