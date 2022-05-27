import axios from "axios";

//  create customer data
export const createCustomer = async (inputData) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/customers`,
    inputData
  );
  return res?.data;
};

//   update customer function

export const updateCustomer = async (inputData) => {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/customers/${inputData.uniqueId}`,
    inputData
  );
  return res?.data;
};
