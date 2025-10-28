import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [data, setdata] = useState();

  useEffect(() => {
    const autoFetch = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_ENDPOINT_BASE}/${url}`,
          {
            method: "GET",
          }
        );
        if (!res.ok) {
          setloading(false);
          seterror("Unable to fetch data");
        }
        const response = await res.json();
        setloading(false);
        setdata(response);
      } catch (error) {
        setloading(false);
        const err = Error(error);
        seterror(err.message);
      }
    };
    autoFetch();
  }, [url]);
  return { loading, error, data };
};

export default useFetch;
