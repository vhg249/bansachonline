import React, { useEffect, useState } from "react";
import { VoucherItem, VoucherList, VoucherWrapper } from "./style";
import { Button } from "../../shared/components/Button";
import axios from "axios";
import { API_URL } from "../constant";
import { useSelector } from "react-redux";
import {toast} from "react-toastify";

export const Voucher = () => {
  const [vouchers, setVouchers] = useState([]);
  const [myVouchers, setMyVouchers] = useState([]);
  const token = useSelector((state) => state.account.token);

  useEffect(() => {
    getMyVouchers();
    getVouchers();
  }, []);

  const getVouchers = async () => {
    try {
      const res = await axios.get(`${API_URL}/Voucher/getListVoucher`);
      setVouchers(res.data.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const getMyVouchers = async () => {
    try {
      const res = await axios.get(`${API_URL}/Voucher/getUserVoucher`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setMyVouchers(res.data.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const saveVoucher = async (id) => {
    try {
      const res = await axios.put(
        `${API_URL}/Voucher/saveVoucher`,
        {
          voucherlist: [id],
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res.data);
      if(res.data.data.result){
        toast.success("Saved");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkVoucher = (voucher) => {
    let arr = myVouchers.filter(item => voucher._id === item._id);
    if(arr.length > 0) return true;
    else return false
  }
  return (
    <>
      <VoucherWrapper>
        <h1>Danh sách mã giảm giá</h1>
        <VoucherList>
          {vouchers &&
            vouchers.map((item, index) => (
              <VoucherItem key={index}>
                <div>
                  <p className="name">{item.name}</p>
                  <p className="code">CODE: {item.code}</p>
                  <p className="description">
                    {item.description} {item.percent}%
                  </p>
                </div>
                <div className="save_btn">
                  <Button
                    onClick={() => saveVoucher(item._id)}
                    disabled={checkVoucher(item)}
                  >
                    Lưu
                  </Button>
                </div>
              </VoucherItem>
            ))}
        </VoucherList>
      </VoucherWrapper>
    </>
  );
};
