import React from "react";
import { CartWrapper } from "./style";
import {CartItem} from "./CartItem";

export const Cart = () => {
  return (
    <div className="container">
      <CartWrapper>
          <h1>Giỏ hàng (2 sản phẩm)</h1>
          <div>
              <CartItem />
              <CartItem />
          </div>
      </CartWrapper>
    </div>
  );
};
