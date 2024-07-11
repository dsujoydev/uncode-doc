import React from "react";
import Layout from "@theme/Layout";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import DataFetcher from "../components/dataFetcher/DataFetcher";

const url = "https://restcountries.com/v3.1/all";
const queryClient = new QueryClient();

const query = () => {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <DataFetcher url={url} keyword="country" />
      </QueryClientProvider>
    </Layout>
  );
};

export default query;

// interface Country {
//   name: {
//     common: string;
//     official: string;
//   };
//   cca3: string;
//   region: string;
//   subregion: string;
//   population: number;
// }

// function Todos() {
//   const queryClient = useQueryClient();
//   const { data, isError, isLoading } = useQuery<Country[]>({
//     queryKey: ["country"],
//     queryFn: async (): Promise<Country[]> => {
//       try {
//         const result = await axios.get(`${url}`);
//         return result.data;
//       } catch (error: any) {
//         if (error.response && error.response.status === 404) {
//           return [];
//         } else {
//           throw error;
//         }
//       }
//     },
//   });

//   console.log(data);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }

//   console.log(data);

//   return (
//     <div>
//       <h1>Countries</h1>
//       <ul>
//         {data?.map((country) => (
//           <li key={country.cca3}>
//             {country.name.common} ({country.region})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
