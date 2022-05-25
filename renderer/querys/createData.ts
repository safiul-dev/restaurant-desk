import { useQuery } from "react-query";
import axios from "axios";
export const createData = async (inputData, url) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}${url}`,
   { data: JSON.stringify(inputData)},
  );
  return res?.data;
};
