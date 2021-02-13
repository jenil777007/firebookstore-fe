import React from "react";

import { Avatar, Badge, Button, List, Tooltip } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

// import InventoryItem from "./inventory-item/InventoryItem";

function InventoryList({ data, onItemAdd, onItemDeduct }) {
  return (
    <div>
      {renderList()}
      {data && !data.length && <h3>Add books from the library!</h3>}
    </div>
  );

  function renderList() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Tooltip title="add">
                <Button
                  type="dashed"
                  //   shape="round"
                  icon={<PlusOutlined />}
                  onClick={() => onItemAdd(item)}
                />
              </Tooltip>,
              <Tooltip title="deduct">
                <Button
                  //   danger
                  type="dashed"
                  //   shape="circle"
                  icon={<MinusOutlined />}
                  disabled={item.quantity < 1}
                  onClick={() => onItemDeduct(item)}
                />
              </Tooltip>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.thumbnail} />}
              title={item.title}
            />
            <div>
              <Tooltip title="Quantity">
                <Badge count={item.quantity} showZero />
              </Tooltip>
            </div>
          </List.Item>
        )}
      />
    );
  }
}

export default InventoryList;
