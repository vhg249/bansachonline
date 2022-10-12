import React, { useEffect, useState } from "react";
import { CartWrapper } from "./style";
import { CartItem } from "./CartItem";
import { Button } from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constant";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {updateCheckout} from "../../redux/actions/cart";

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.account.isLogin);
  const token = useSelector((state) => state.account.token);
  const [cartList, setCartList] = useState([]);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    getBillApi();
  }, []);

  const getBillApi = async () => {
    try {
      const res = await axios.get(`${API_URL}/bills/${localStorage.getItem("username")}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      });
      console.log(res.data.data);
      setCartList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const checkoutPayment = async () => {
    try{
      const res = await axios.post(
          `${API_URL}/Bill/checkout`,
          { orderlist: orderList },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
          }
      );
      if(res.data.data.result){
        dispatch(updateCheckout({checkoutResult: res.data.data}));
        // navigate("/payment");
      }
    } catch (err){
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  const selectOrder = (idOrder) => {
    let arr = orderList;
    if (orderList.includes(idOrder)) {
      arr = arr.filter((item) => item !== idOrder);
    } else {
      arr.push(idOrder);
    }
    setOrderList(arr);
    console.log(arr);
  };

  return (
    <div className="container">
      <CartWrapper>
        <h1>Lịch sử đơn hàng ({cartList ? cartList.length : 0} đơn)</h1>
        <div>
          {cartList &&
            cartList.map((item, index) => (
              <CartItem data={item} key={index} requestFetch={getBillApi} />
            ))}
        </div>
        <Button
         onClick={() => navigate("/")}
        >Back to shop</Button>
      </CartWrapper>
    </div>
  );
};
