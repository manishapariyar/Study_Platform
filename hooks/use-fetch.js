//custom hooks
// just like a normal function

import { toast } from "sonner";
import { useState } from "react";


const useFetch = (fn) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fn(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      toast.error(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return { loading, data, error, fn: fetchData };
};

export default useFetch;