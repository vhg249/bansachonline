import React, { useState } from "react";
import { Form, LoginWrapper } from "./style";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constant";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {updateToken} from "../../redux/actions/accounts";

export const Signup = () => {
  const [firstName, setFirstName] = useState("Nguyen");
  const [lastName, setLastName] = useState("Huong");
  const [username, setUsername] = useState("tranhuy");
  const [password, setPassword] = useState("123");
  const [confirmPassword, setConfirmPassword] = useState("123");
  const [email, setEmail] = useState("bbb@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("22");
  const [address, setAddress] = useState("HaDong");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postUser = async (body) => {
    try{
      const res = await axios.post(`${API_URL }/users`, body);
      toast.success("Success");
      navigate("/login");
      return res.data.data;
    }
    catch (err){
      console.log(err);
      toast.error(err.response.data.message)
      return null;
    }
  };

  const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  };

  const validatePhone = (inputtxt) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneno.test(inputtxt)
  }

  const validate = () => {
    if(email === "" || password === "" || confirmPassword === "" || phoneNumber === "" || address === "" || username === "" || firstName === "" || lastName === ""){
      toast.error("Vui lòng điền đầy đủ thông tin");
      return false;
    } else if(!validateEmail(email)){
      toast.error("Nhập lại ");
      return false;
    } 
     else if(password !== confirmPassword){
      toast.error("Mật khẩu không khớp");
      return false;
    } else {
      return true;
    }
  }

  const register = async () => {
    if(validate()){
      const res = await postUser({
        // email: email,
        password: password,
        age: phoneNumber,
        address: address,
        username: username,
        // firstName: firstName,
        // lastName: lastName
      })
      if(res){
        // dispatch(updateToken({token: res.lastToken}));
       
      }
    }
  }

  return (
    <div className="container">
      <LoginWrapper flexDirection={"column"} alignItems={"center"}>
        <h1>Đăng ký</h1>
        <Form>
          {/* <Input
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
          /> */}
          <Input
            label="Tên đăng nhập"
            type="text"
            placeholder="Nhập username"
            required={true}
            value={username}
            setValue={setUsername}
          />
          {/* <Input
            label="Email"
            type="email"
            placeholder="Nhập email"
            required={true}
            value={email}
            setValue={setEmail}
          /> */}

          <Input
            label="Địa chỉ"
            type="text"
            placeholder="Nhập địa chỉ"
            required={true}
            value={address}
            setValue={setAddress}
          />
          <Input
            label="Tuổi"
            type="text"
            placeholder="Nhập tuổi"
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
