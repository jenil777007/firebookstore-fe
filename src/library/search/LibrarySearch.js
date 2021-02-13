import React from "react";

import { Input } from "antd";

const { Search } = Input;

function LibrarySearch({ onSearchSubmit }) {
  const onSearch = (value) => {
    onSearchSubmit(value);
  };

  return (
    <div className="library-search">
      <Search
        placeholder="search any book title here"
        onSearch={onSearch}
        style={{ width: 300 }}
        size="large"
      />
    </div>
  );
}

export default LibrarySearch;
