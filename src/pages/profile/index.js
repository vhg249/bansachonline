import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { VoucherWrapper } from "../voucher/style";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../constant";
import { Input } from "../../shared/components/Input";

const ProfileWrapper = styled(VoucherWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = () => {
  const [myProfile, setMyProfile] = useState();
  const isLogin = useSelector((state) => state.account.isLogin);
  const token = useSelector((state) => state.account.token);
  const dispatch = useDispatch();

  useEffect(() => {
      getMeApi();
  }, []);

  const getMeApi = async () => {
    try {
      const res = await axios.get(`${API_URL}/auth/getMe`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      // dispatch(updateProfile({profile: res.data.data}))
      setMyProfile(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <ProfileWrapper>
          <h1>Thông tin tài khoản</h1>
          <Input
            label="Tên"
            type="text"
            disabled={true}
            value={myProfile ? myProfile.firstName : ""}
          />
          <Input
            label="Họ"
            type="text"
            disabled={true}
            value={myProfile ? myProfile.lastName : ""}
          />
          <Input
            label="Email"
            type="email"
            disabled={true}
            value={myProfile ? myProfile.email : ""}
          />

          <Input
            label="Địa chỉ"
            type="text"
            disabled={true}
            value={myProfile ? myProfile.address : ""}
          />
          <Input
            label="Số điện thoại"
            type="text"
            disabled={true}
            value={myProfile ? myProfile.phonenumber : ""}
          />
          <Input
            label="Mật khẩu"
            type="password"
            disabled={true}
            value={myProfile ? myProfile.password : ""}
          />
        </ProfileWrapper>
      </div>
    </>
  );
};
