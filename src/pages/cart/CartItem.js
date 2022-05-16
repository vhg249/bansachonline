import React from "react";
import { Item } from "./style";
import { Checkbox } from "@mui/material";
import book from "../../assets/images/book.jpg";
import trash from "../../assets/images/trash.png";
import Flex from "../../shared/components/Flex";

export const CartItem = (props) => {
  return (
    <Item>
      <div>
        <Checkbox color="success" />
      </div>
      <div className="image">
        <img src={book} alt="book" />
        <Flex flexDirection="column" justifyContent="space-between">
          <p className="name">Sherlock Holmes</p>
          <p className="price">200.000d</p>
        </Flex>
      </div>
      <div>Số lượng: 2</div>
      <div>400.000d</div>
      <div>
        <img src={trash} alt="trash" />
      </div>
    </Item>
  );
};
