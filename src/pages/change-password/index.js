import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { VoucherWrapper } from "../voucher/style";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../constant";
import { Input } from "../../shared/components/Input";
import Flex from "../../shared/components/Flex";
import { Button } from "../../shared/components/Button";
import { toast } from "react-toastify";

const ProfileWrapper = styled(VoucherWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const ChangePassword = () => {
  const [myProfile, setMyProfile] = useState();
  const isLogin = useSelector((state) => state.account.isLogin);
  const token = useSelector((state) => state.account.token);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [firstName, setFirstName] = useState("Nguyen");
  const [lastName, setLastName] = useState("Huong");
  const [email, setEmail] = useState("bbb@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [address, setAddress] = useState("HaDong");

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

  const updateProfile = async (body) => {
    try {
      const res = await axios.put(`${API_URL}/Book/update`, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      return res.data.data;
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
      return null;
    }
  };

  return (
    <>
      <div className="container">
        <ProfileWrapper>
          <h1>?????i m???t kh???u</h1>
          <Input
            label="M???t kh???u c??"
            type="password"
            disabled={!isEdit}
            value={""}
          />
          <Input
              label="M???t kh???u m???i"
              type="password"
              disabled={!isEdit}
              value={""}
          />
          <Input
              label="Nh???p l???i m???t kh???u m???i"
              type="password"
              disabled={!isEdit}
              value={""}
          />
          <Flex gap={"20px"} justifyContent="center">
            {isEdit ? (
              <Button onClick={() => setIsEdit(true)}>C???p nh???t</Button>
            ) : (
              <>
                <Button onClick={() => setIsEdit(true)}>
                  C???p nh???t th??ng tin
                </Button>
                <Button>?????i m???t kh???u</Button>
              </>
            )}
          </Flex>
        </ProfileWrapper>
      </div>
    </>
  );
};
