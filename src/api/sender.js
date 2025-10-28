import axios from "axios";

const sender = async (url, request, values = null) => {
  let res;
  let data = null;
  let error = null;
  let loading = true;

  try {
    if (request?.toUpperCase() === "POST") {
      res = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT_BASE}/${url}`,
        values
      );
    } else if (request?.toUpperCase() === "PUT") {
      res = await axios.put(
        `${process.env.REACT_APP_API_ENDPOINT_BASE}/${url}`,
        values
      );
    } else if (request?.toUpperCase() === "PATCH") {
      res = await axios.patch(
        `${process.env.REACT_APP_API_ENDPOINT_BASE}/${url}`,
        values
      );
    } else if (request?.toUpperCase() === "DELETE") {
      res = await axios.delete(
        `${process.env.REACT_APP_API_ENDPOINT_BASE}/${url}`
      );
    }

    if (res?.status?.toString()?.charAt(0) === "2") {
      data = res.data;
    } else {
      error = "Something went wrong. Try again";
    }

    loading = false;
  } catch (catchError) {
    const err = Error(catchError);
    error = err?.message;
  }
  return { data, error, loading };
};

export default sender;
