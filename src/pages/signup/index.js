import React, { useState } from "react";
import { Form, LoginWrapper } from "./style";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constant";

export const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();

  const postUser = () => {
    axios
      .post(`${API_URL}/user`, {
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address,
        userName: username,
        firstName: firstName,
        lastName: lastName
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const register = () => {

  }

  return (
    <div className="container">
      <LoginWrapper flexDirection={"column"} alignItems={"center"}>
        <h1>Đăng ký</h1>
        <Form>
          <Input
            label="Tên"
            type="text"
            placeholder="Nhập tên"
            required={true}
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            label="Họ"
            type="text"
            placeholder="Nhập họ"
            required={true}
            value={lastName}
            setValue={setLastName}
          />
          <Input
            label="Tên đăng nhập"
            type="text"
            placeholder="Nhập tên"
            required={true}
            value={username}
            setValue={setUsername}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Nhập email"
            required={true}
            value={email}
            setValue={setEmail}
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
          <Input
            label="Mật khẩu"
            type="password"
            placeholder="Nhập mật khẩu"
            required={true}
            value={password}
            setValue={setPassword}
          />
          <Input
            label="Nhập lại mật khẩu"
            type="password"
            placeholder="Nhập mật khẩu"
            required={true}
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          <div className="link">
            Bạn đã có tài khoản?
            <Link to="/login">Đăng nhập</Link>
          </div>
          <Button onClick={() => register()}>Đăng ký</Button>
        </Form>
      </LoginWrapper>
    </div>
  );
};
