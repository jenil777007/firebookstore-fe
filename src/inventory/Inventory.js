import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Skeleton } from "antd";

import { API_URL } from "../constants";
import InventoryList from "./inventory-list/InventoryList";

function Inventory() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  function getAndSetBooks() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }

  const handleItemAddition = (item) => {
    fetch(`${API_URL}/${item.id}/add`, { method: "PUT" })
      .then((res) => res.json())
      .then((data) => {
        getAndSetBooks();
      });
  };
  const handleItemDeduction = (item) => {
    fetch(`${API_URL}/${item.id}/deduct`, { method: "PUT" })
      .then((res) => res.json())
      .then((data) => {
        getAndSetBooks();
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getAndSetBooks();
  }, []);

  return (
    <div className="app-component inventory">
      <h2>Inventory</h2>
      <div className="inventory-list">
        {isLoading ? (
          <Skeleton active />
        ) : (
          <InventoryList
            data={items}
            onItemAdd={handleItemAddition}
            onItemDeduct={handleItemDeduction}
          ></InventoryList>
        )}
      </div>
      <Link to="/">Go To Library</Link>
    </div>
  );
}

export default Inventory;
