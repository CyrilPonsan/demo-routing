import { useCallback, useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:4000/knowledge";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = useCallback(
    async (req: any, applyData: (data: any) => void) => {
      setIsLoading(true);
      setError("");
      let response: any;
      try {
        switch (req.method) {
          case "post":
            response = await axios.post(`${BASE_URL}${req.path}`, req.body, {
              withCredentials: true,
            });
            break;
          case "put":
            break;
          case "delete":
            break;
          default:
            response = await axios.get(`${BASE_URL}${req.path}`, {
              withCredentials: true,
            });
            break;
        }
        applyData(response.data);
      } catch (err: any) {
        console.log(err.response.status);
        setError(err.response.message);
        if (err.response.status === 401 || err.response.status === 403) {
        }
      }
      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, sendRequest };
};

export default useHttp;
