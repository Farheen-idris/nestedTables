import React from "react";
import "./Table.css";

const TableComponent = (props) => {
  const [expandedRows, setExpandedRows] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [rowPerPage, setRowPerPage] = React.useState(10);
  const [currentSort, setCurrentSort] = React.useState("default");
  const { data } = props;

  const id = data.map((q) => q.albumId);
  const uniqueCategories = [...new Set(id)];
  console.log(uniqueCategories);
  const handleExpand = (item) => {
    const currentExpandedRows = data.filter((name) => name.albumId === item);
    setSelected(item);
    setShow(true);
    setExpandedRows(currentExpandedRows);
  };
  const sortTypes = {
    up: {
      class: "sort-up",
      fn: (a, b) => a.title - b.title,
    },
    down: {
      class: "sort-down",
      fn: (a, b) => b.title - a.title,
    },
    default: {
      class: "sort",
      fn: (a, b) => a,
    },
  };
  const onSortChange = () => {
    alert("hello");
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";

    setCurrentSort(nextSort);
  };
  return (
    <div>
      {uniqueCategories?.slice(0, rowPerPage).map((item, i) => (
        <div>
          <table
            class="js-table-sort"
            data-sort='{"first_class":"js-td-sort","first_type":true,"second_class":"team","second_type":false,"sort":"DESC","position_class":"number"}'
          >
            <thead>
              <tr onClick={() => handleExpand(item)}>
                <th class="number" key={i}>
                  Album {item}
                </th>
              </tr>
            </thead>
          </table>
          <table>
            {show && selected === item && (
              <thead>
                <tr>
                  <th class="number" key={i}>
                    <button onClick={onSortChange}>Sort</button>
                    Title
                  </th>
                  <th class="number" key={i}>
                    Url
                  </th>
                  <th class="number" key={i}>
                    Thumbnail Url
                  </th>
                </tr>
              </thead>
            )}
            {expandedRows && selected === item
              ? [...expandedRows]
                  .sort(sortTypes[currentSort].fn)
                  .map((data, i) => (
                    <tbody>
                      <tr>
                        <td>{data.title}</td> <td>{data.url}</td>{" "}
                        <td>{data.thumbnailUrl}</td>
                      </tr>
                    </tbody>
                  ))
              : null}
          </table>
        </div>
      ))}
      <select
        onChange={(e) => setRowPerPage(e.target.value)}
        value={rowPerPage}
      >
        {uniqueCategories.slice(0, 10).map((item) => (
          <option value={rowPerPage + 10}>{item * rowPerPage}</option>
        ))}
      </select>
    </div>
  );
};

export default TableComponent;
