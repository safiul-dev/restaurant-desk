import { useQuery } from "react-query";
import axios from "axios";
export const getDatas = (props: any) => {

  return useQuery<any, any, any, string[]>(
    [
      "data-lists",
    ],async () => {
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}${props.url}`,
        {
          params: {
            // page: props.page,
            // pageSize: props.pageSize,
          },
        }
      );

      return res?.data;
    },
    {
      refetchOnWindowFocus: false,
    }
    
  );
};
