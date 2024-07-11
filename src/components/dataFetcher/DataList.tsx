import React from "react";
import { Country } from "@site/src/types";

interface DataListProps {
  data: Country[];
}

const DataList: React.FC<DataListProps> = ({ data }) => {
  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {data.map((item, index) => (
          <li key={item.cca3}>
            {item.name.common} ({item.region})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
