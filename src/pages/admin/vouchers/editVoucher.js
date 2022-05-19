import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constant";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { VoucherWrapper } from "../../voucher/style";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";

const Wrapper = styled(VoucherWrapper)`
  & > div {
    width: 100%;
  }
`;

export const EditVoucher = () => {
  const [voucher, setVoucher] = useState();
  const params = useParams();

  useEffect(() => {
    // getVouchers();
  }, []);

  const getVouchers = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/Voucher/getListVoucher?_id=${params.id}`
      );
      setVoucher(res.data.data.result[0]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Wrapper>
        <h1>Thêm mã giảm giá</h1>
        <Input label="Tên" type="text" value={voucher ? voucher.name : ""} />
        <Input label="Code" type="text" value={voucher ? voucher.code : ""} />
        <Input
          label="Mô tả"
          type="text"
          value={voucher ? voucher.description : ""}
        />
        <Input
          label="Giá trị"
          type="number"
          value={voucher ? voucher.percent : ""}
        />
        <Button>Thêm</Button>
      </Wrapper>
    </>
  );
};
