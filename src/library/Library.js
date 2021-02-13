import React, { useState } from "react";

import { Link } from "react-router-dom";

import { message, Spin, Space } from "antd";

import LibrarySearch from "./search/LibrarySearch";
import LibrarySearchView from "./search-view/LibrarySearchView";
import { API_URL } from "../constants";

function Library() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) return;
    setSearchTerm(searchTerm);
    setIsLoading(true);

    fetch(`${API_URL}/search?query=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
        setIsLoading(false);
      });
  };

  const handleBookOrder = (book) => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        handleSearch(searchTerm);
        message.success(`${book.title} has been added into the inventory`);
      });
  };
  const handleBookRemoval = (book) => {
    fetch(`${API_URL}/${book.id}`, { method: "DELETE" }).then((data) => {
      handleSearch(searchTerm);
      message.success(`${book.title} has been removed into the inventory`);
    });
  };

  return (
    <div className="app-component">
      <LibrarySearch onSearchSubmit={handleSearch}></LibrarySearch>

      {!isLoading ? (
        <LibrarySearchView
          data={searchResults}
          onBookOrder={(book) => handleBookOrder(book)}
          onBookRemoval={(book) => handleBookRemoval(book)}
        ></LibrarySearchView>
      ) : (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      )}

      <Link to="/inventory">Go To Inventory</Link>
    </div>
  );
}

export default Library;
