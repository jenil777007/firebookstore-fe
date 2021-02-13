import React from "react";

import { Empty } from "antd";

import Book from "../Book";

function LibrarySearchView({ data, onBookOrder, onBookRemoval }) {
  function renderSearchResults() {
    return (
      <div className="lib-search-results">
        {data.map((book) => (
          <Book
            key={book.id}
            data={book}
            onBookOrder={(book) => onBookOrder(book)}
            onBookRemoval={(book) => onBookRemoval(book)}
          ></Book>
        ))}
      </div>
    );
  }

  function renderNoDataPlaceholder() {
    return (
      <Empty
        image="https://www.softmaco.com/assets/images/no%20data.png"
        imageStyle={{
          height: 200,
          padding: "2rem",
        }}
        description={<span>Search for a book or</span>}
      ></Empty>
    );
  }

  return (
    <>
      {data && data.length ? renderSearchResults() : renderNoDataPlaceholder()}
    </>
  );
}

export default LibrarySearchView;
