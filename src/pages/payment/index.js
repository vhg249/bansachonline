import React, { useState } from "react";
import {
  FormWrapper,
  Grid,
  OrderList,
  PaymentWrapper,
  VoucherItem,
  VoucherList,
  VoucherWrapper,
} from "./style";
import { CartItem } from "../cart/CartItem";
import Button from "@mui/material/Button";
import {Input} from "../../shared/components/Input";

export const Payment = () => {
  const [vouchers, setVouchers] = useState([1, 2, 3]);
  const [orders, setOrders] = useState([1, 2, 3]);
  const [name, setName] = useState("");
  return (
    <>
      <PaymentWrapper>
        <div className="container">
          <Grid>
            <OrderList>
              {orders.map((item, index) => (
                <CartItem key={index} />
              ))}
            </OrderList>
            <VoucherWrapper>
              <h3>Vouchers</h3>
              <VoucherList>
                {vouchers.map((item, index) => (
                  <VoucherItem key={index}>
                    <div>
                      <p className="code">ABC123</p>
                      <p className="describe">description</p>
                    </div>
                    <div>
                      <Button variant="contained" size="small">
                        Chọn
                      </Button>
                    </div>
                  </VoucherItem>
                ))}
              </VoucherList>
            </VoucherWrapper>
          </Grid>
          <FormWrapper>
            <h3>Thông tin giao hàng</h3>
            <Input
                label="Tên"
                type="text"
                placeholder="Nhập tên"
                required={true}
                value={name}
                setValue={setName()}
            />
            <Input
                label="Địa chỉ"
                type="text"
                placeholder="Nhập địa chỉ"
                required={true}
                value={address}
                setValue={setAddress}
            />
          </FormWrapper>
        </div>
      </PaymentWrapper>
    </>
  );
};
