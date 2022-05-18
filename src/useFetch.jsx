import axios from "axios";
import { useQuery } from "react-query";

const getFetcher = async (URL) => {
  let res = await axios.get(URL);
  return res.data;
};

const useFetch = (key, URL) => {
  return useQuery([...key, URL], () => getFetcher(URL));
};

export default useFetch;
