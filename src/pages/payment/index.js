import React, {useEffect, useState} from "react";
import {
  FormWrapper,
  Grid,
  OrderList,
  PaymentWrapper, Total,
  VoucherItem,
  VoucherList,
  VoucherWrapper,
} from "./style";
import { CartItem } from "../cart/CartItem";
import { Button } from "../../shared/components/Button";
import {Input} from "../../shared/components/Input";
import {OrderItem} from "./OrderItem";
import {useSelector} from "react-redux";

export const Payment = () => {
  const [vouchers, setVouchers] = useState([1, 2, 3]);
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const checkout = useSelector((state) => state.cart.checkoutResult);


  useEffect(() => {
    console.log(checkout)
    if(checkout){
      setOrders(checkout.result);
    }
  }, [checkout]);

  useEffect(() => {
    console.log("orders",orders)
  }, [orders]);


  return (
    <>
      <PaymentWrapper>
        <div className="container">
          <Grid>
            <OrderList>
              {orders.map((item, index) => (
                <OrderItem key={index} data={item} />
              ))}
              <Total>
                <p>Tổng:</p>
                <p>{checkout ? checkout.price.toLocaleString() : 0}đ</p>
              </Total>
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
                label="Họ tên"
                type="text"
                placeholder="Nhập tên"
                required={true}
                value={name}
                setValue={setName}
            />
            <Input
                label="Địa chỉ"
                type="text"
                placeholder="Nhập địa chỉ"
                required={true}
                value={address}
                setValue={setAddress}
            />
            <Input
                label="Số điện thoại"
                type="text"
                placeholder="Nhập số điện thoại"
                required={true}
                value={phoneNumber}
                setValue={setPhoneNumber}
            />
            <div className="submit_btn">
              <Button>Thanh toán</Button>
            </div>

          </FormWrapper>
        </div>
      </PaymentWrapper>
    </>
  );
};
