import React, { useEffect, useState } from "react";
import {
  FormWrapper,
  Grid,
  OrderList,
  PaymentWrapper,
  Total,
  VoucherItem,
  VoucherList,
  VoucherWrapper,
} from "./style";
import { CartItem } from "../cart/CartItem";
import { Button } from "../../shared/components/Button";
import { Input } from "../../shared/components/Input";
import { OrderItem } from "./OrderItem";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../constant";
import Flex from "../../shared/components/Flex";
import {toast} from "react-toastify";

export const Payment = () => {
  const [vouchers, setVouchers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const checkout = useSelector((state) => state.cart.checkoutResult);
  const profile = useSelector((state) => state.account.profile);
  const token = useSelector((state) => state.account.token);
  const [selectedVoucher, setSelectedVoucher] = useState();

  useEffect(() => {
    if (checkout) {
      setOrders(checkout.result);
    }
  }, [checkout]);

  useEffect(() => {
    getMyVoucher();
  }, []);

  const getMyVoucher = async () => {
    try {
      const res = await axios.get(`${API_URL}/Voucher/getUserVoucher`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      console.log(res.data.data.result);
      setVouchers(res.data.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalPrice = () => {
    if (selectedVoucher) {
      return (checkout.price / 100) * selectedVoucher.percent;
    } else {
      return checkout.price;
    }
  };

  const validate = () => {
    if(name === "" || phoneNumber === "" || address === ""){
      toast.error("Điền đầy đủ thông tin");
      return false;
    } else {
      return true;
    }
  }

  const handlePayment = async () => {
    if(!validate()) return;
    const res = await axios.post(
      `${API_URL}/Bill/insert`,
      {
        address: address,
        userid: "",
        status: "",
        phonenumber: phoneNumber,
        name: name,
        voucher: selectedVoucher ? selectedVoucher._id : "",
        checkout_result: checkout.result,
        price: getTotalPrice,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  };

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
                <Flex alignItems="center">
                  {/*<p>{checkout ? checkout.price.toLocaleString() : 0}đ</p>*/}
                  <p>{getTotalPrice().toLocaleString()}đ</p>
                </Flex>
              </Total>
            </OrderList>
            <VoucherWrapper>
              <h3>Vouchers</h3>

              <VoucherList>
                {vouchers.map((item, index) => (
                  <VoucherItem key={index}>
                    <div>
                      <p className="code">{item.name}</p>
                      <p className="describe">{item.code}</p>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => setSelectedVoucher(item)}
                        disabled={
                          selectedVoucher && selectedVoucher._id === item._id
                        }
                      >
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
              <Button onClick={() => handlePayment()}>Thanh toán</Button>
            </div>
          </FormWrapper>
        </div>
      </PaymentWrapper>
    </>
  );
};
