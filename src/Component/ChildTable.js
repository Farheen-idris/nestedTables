import React from "react";
import "./Table.css";

const ChildTable = (props) => {
  const { data } = props;

  return (
    <table>
      <thead>
        <tr>
          <th class="number">Title</th>
          <th class="number">Url</th>
          <th class="number">Thumbnail Url</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.title}</td> <td>{data.url}</td> <td>{data.thumbnailUrl}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ChildTable;
