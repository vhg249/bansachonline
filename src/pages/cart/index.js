import React from "react";
import { CartWrapper } from "./style";
import { CartItem } from "./CartItem";
import { Button } from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();

  const payment = () => {
    navigate("/payment");
  };
  return (
    <div className="container">
      <CartWrapper>
        <h1>Giỏ hàng (2 sản phẩm)</h1>
        <div>
          <CartItem />
          <CartItem />
        </div>
        <Button onClick={() => payment()}>Thanh toán</Button>
      </CartWrapper>
    </div>
  );
};
