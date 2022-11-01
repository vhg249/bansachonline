import React, { useState } from "react";
import { Form, LoginWrapper } from "./style";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../constant";
import { toast } from "react-toastify";
import { loginSuccess, updateToken } from "../../redux/actions/accounts";

export const Login = () => {
  const [email, setEmail] = useState("huytran");
  const [password, setPassword] = useState("123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const headers = {
    "Content-Type": "application/json",
  };
  const loginApi = async (body) => {
    try {
      const res = await axios.post(`${API_URL}/auth`, body, {
        headers: headers,
      });
      localStorage.setItem("username", email);
      return res.data;
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
      return null;
    }
  };

  const login = async () => {
    if (false) {
      toast.error("Nhập lại ");
    } else {
      const res = await loginApi({
        username: email,
        password: password,
      });   
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((_address) => {
          if (res.user.walletAddress === _address[0]) {
            dispatch(loginSuccess());
            toast.success("Success");
            navigate("/");
            localStorage.setItem('walletAddress', _address)
          } else {
            toast.error("Wallet address is invalid");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      if (res) {
        dispatch(updateToken({ token: res.access_token }));
      }
    }
  };

  return (
    <div className="container">
      <LoginWrapper flexDirection={"column"} alignItems={"center"}>
        <h1>Đăng nhập</h1>
        <Form>
          <Input
            label="Username"
            type="text"
            placeholder="Nhập username"
            required={true}
            value={email}
            setValue={setEmail}
          />
          <Input
            label="Mật khẩu"
            type="password"
            placeholder="Nhập mật khẩu"
            required={true}
            value={password}
            setValue={setPassword}
          />
          <div className="link">
            Bạn chưa có tài khoản?
            <Link to="/signup">Đăng ký</Link>
          </div>
          <Button onClick={() => login()}>Đăng nhập</Button>
        </Form>
      </LoginWrapper>
    </div>
  );
};
