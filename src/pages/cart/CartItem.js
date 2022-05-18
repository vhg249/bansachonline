import React from "react";
import { Item } from "./style";
import { Checkbox } from "@mui/material";
import book from "../../assets/images/book.jpg";
import trash from "../../assets/images/trash.png";
import Flex from "../../shared/components/Flex";
import axios from "axios";
import { API_URL } from "../constant";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const CartItem = ({ data, ...props }) => {
  const token = useSelector((state) => state.account.token);
  const handlePrice = (price, quantity) => {
    let p = price * quantity;
    return p.toLocaleString();
  };
  const handleOnChange = (isSelected) => {
    props.selectOrder(data._id);
  };

  const deleteOrder = async (idOrder) => {
    try {
      const res = await axios.delete(`${API_URL}/Order/deleteOrder`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        data: { deleteId: [idOrder] },
      });
      console.log(res.data.data);
      if (res.data.data.result) {
        toast.success("Deleted");
        props.requestFetch();
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  return (
    <Item>
      <div>
        <Checkbox
          color="success"
          onChange={(e) => handleOnChange(e.target.checked)}
        />
      </div>
      <div className="image">
        <img src={data ? data.book[0].image : ""} alt="book" />
        <Flex flexDirection="column" justifyContent="space-between">
          <p className="name">{data ? data.book[0].name : ""}</p>
          <p className="price">{data ? data.price.toLocaleString() : ""}đ</p>
        </Flex>
      </div>
      <div>Số lượng: {data ? data.quantity : 0}</div>
      <div>{data ? handlePrice(data.price, data.quantity) : ""}đ</div>
      <div>
        <img
          className="delete"
          src={trash}
          alt="trash"
          onClick={() => deleteOrder(data._id)}
        />
      </div>
    </Item>
  );
};
