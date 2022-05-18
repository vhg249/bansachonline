import React from "react";
import { Item } from "./style";
import book from "../../assets/images/book.jpg";
import trash from "../../assets/images/trash.png";
import Flex from "../../shared/components/Flex";

export const OrderItem = ({data, ...props}) => {
    const handlePrice = (price, quantity) => {
      let p = price*quantity;
      return p.toLocaleString();
    }
  return (
    <Item>
      <div className="image">
        <img src={data ? data.book.image : ""} alt="book" />
        <Flex flexDirection="column" justifyContent="space-between">
          <p className="name">{data ? data.book.name : ""} </p>
          <p className="price">{data ? data.book.price.toLocaleString() : ""}đ</p>
        </Flex>
      </div>
      <div>{data ? data.quantity : 0}</div>
      <div>{data ? handlePrice(data.book.price, data.quantity) : 0}đ</div>
    </Item>
  );
};
