import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Create a generic custom hook
export const useFetch = <T>(url: string, keyword: string) => {
  return useQuery<T>({
    queryKey: [{ keyword }, url],
    queryFn: async (): Promise<T> => {
      try {
        const result = await axios.get(url);
        return result.data;
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          return [] as unknown as T;
        } else {
          throw error;
        }
      }
    },
  });
};
