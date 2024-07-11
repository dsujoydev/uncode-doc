import React from "react";
import { useFetch } from "@site/src/hooks/useFetch";
import { Country } from "@site/src/types";
import DataList from "./DataList";

interface DataFetcherProps {
  url: string;
  keyword: string;
}

const DataFetcher: React.FC<DataFetcherProps> = ({ url, keyword }) => {
  const { data, isError, isLoading } = useFetch<Country[]>(url, keyword);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return <DataList data={data ?? []} />;
};

export default DataFetcher;
