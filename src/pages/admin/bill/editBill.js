import React, { useEffect, useState } from "react";
import { DetailWrapper, InfoList } from "../../bill-detail/style";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constant";
import { useSelector } from "react-redux";
import { OrderItem } from "../../payment/OrderItem";
import Flex from "../../../shared/components/Flex";
import { Total, VoucherList } from "../../payment/style";
import moment from "moment";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {Button} from "../../../shared/components/Button";

export const EditBill = () => {
  const param = useParams();
  const token = useSelector((state) => state.account.token);
  const [bill, setBill] = useState([]);
  const [status, setStatus] = useState(bill ? bill.status : "");

  useEffect(() => {
    getBills();
  }, []);

  const getBills = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/Bill/getListBill?_id=${param.id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setBill(res.data.data.result[0]);
      console.log(res.data.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  const handlePrice = (price, quantity) => {
    let p = price * quantity;
    return p.toLocaleString();
  };
  const updateBill = () => {

  }

  return (
    <DetailWrapper>
      <div>
        {bill.checkout_result &&
          bill.checkout_result.map((item, index) => (
            <OrderItem data={item} key={index} />
          ))}
        <Total>
          <p>Tổng:</p>
          <Flex alignItems="center">
            <p>{bill ? bill.price : 0}đ</p>
          </Flex>
        </Total>
      </div>
      <InfoList>
        <Flex justifyContent="space-between" gap="20px">
          <p>Họ tên</p>
          <p>{bill ? bill.name : ""}</p>
        </Flex>
        <Flex justifyContent="space-between" gap="20px">
          <p>Số điện thoại</p>
          <p>{bill ? bill.phonenumber : ""}</p>
        </Flex>
        <Flex justifyContent="space-between" gap="20px">
          <p>Địa chỉ</p>
          <p>{bill ? bill.address : ""}</p>
        </Flex>
        <Flex justifyContent="space-between" gap="20px">
          <p>Ngày đặt hàng</p>
          <p>{bill ? moment(bill.createdAt).format("MMM Do YY") : ""}</p>
        </Flex>
        <Flex justifyContent="space-between" alignItems={"center"} gap="20px">
          <p>Trạng thái</p>
          <FormControl style={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Age"
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value={"Pending"}>Pending</MenuItem>
              <MenuItem value={"Paid"}>Paid</MenuItem>
              <MenuItem value={"Fail"}>Fail</MenuItem>
            </Select>
          </FormControl>
        </Flex>
          <Button>Cập nhật</Button>
      </InfoList>
    </DetailWrapper>
  );
};
