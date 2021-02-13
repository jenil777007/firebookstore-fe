import React from "react";

import { Badge, Card, Tooltip } from "antd";
import { MinusOutlined, LinkOutlined, PlusOutlined } from "@ant-design/icons";

const { Meta } = Card;

function Book({ data: item, onBookOrder, onBookRemoval }) {
  return (
    <Badge.Ribbon text={item.is_available_in_inventory && "In Stock"}>
      <Card
        size="small"
        style={{ width: 250 }}
        cover={
          <img className="book-cover" alt="example" src={item.thumbnail} />
        }
        actions={[
          <Tooltip title="Add to inventory">
            <PlusOutlined
              key="setting"
              onClick={() => onBookOrder(item)}
              style={{
                display: item.is_available_in_inventory && "none",
              }}
            />
          </Tooltip>,
          <Tooltip title="Remove from inventory">
            <MinusOutlined
              key="setting"
              onClick={() => onBookRemoval(item)}
              style={{
                display: !item.is_available_in_inventory && "none",
              }}
            />
          </Tooltip>,
          <Tooltip title="Link">
            <LinkOutlined
              key="setting"
              onClick={() => window.open(item.link, "_blank")}
            />
          </Tooltip>,
        ]}
      >
        <Meta title={item.title} />
      </Card>
    </Badge.Ribbon>
  );
}

export default Book;
