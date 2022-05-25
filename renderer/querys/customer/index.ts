import { useQuery } from "react-query";
import axios from "axios";
export const createCustomer = async (inputData) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/customers`,
      inputData
  );
  return res?.data;
};