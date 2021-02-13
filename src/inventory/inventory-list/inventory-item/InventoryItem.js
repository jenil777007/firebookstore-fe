import React from "react";

import { Avatar, Button, List, Tooltip } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

function InventoryItem({ item }) {
  return (
    <List.Item
      actions={[
        <Tooltip title="add">
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            // onClick={handleAddClick}
          />
        </Tooltip>,
        <Tooltip title="deduct">
          <Button
            danger
            shape="circle"
            icon={<MinusOutlined />}
            // onClick={handleDeductClick}
          />
        </Tooltip>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={item.thumbnail} />}
        title={item.title}
      />
      <div>Qty: {item.quantity}</div>
    </List.Item>
  );
}

export default InventoryItem;
