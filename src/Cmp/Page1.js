import React, { useState } from "react";

import "./Page1.css";

export default function Page1() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div className="page">
      <div>
       <input name="query" type="text" placeholder="Search query " onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item) => (
          <div>{item}</div> //Display each item
        ))}
    </div>
  );
}
