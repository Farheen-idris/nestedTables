import React, { useEffect, useState } from "react";
import TableComponent from "./Component/Table";
const regionApi = "https://jsonplaceholder.typicode.com/photos";

const Albums = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(regionApi)
      .then((response) => response.json())

      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    console.log(data.length);
  }, []);

  return (
    <div>
      {/* {loading && <div className="loader" />} */}
      {/* {data?.map((item, i) => (
        <div key={i}>{item.albumId}</div>
      ))} */}
      <TableComponent data={data} />
    </div>
  );
};

export default Albums;
