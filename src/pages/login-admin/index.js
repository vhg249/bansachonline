import React, { useState } from "react";
import { Form, LoginWrapper } from "./style";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_URL } from "../constant";
import { toast } from "react-toastify";
import { loginSuccess, updateToken } from "../../redux/actions/accounts";

export const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const loginApi = async (body) => {
    try {
      const res = await axios.post(`${API_URL}/auth/login-admin`, body);
      return res.data.data;
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
      return null;
    }
  };

  const login = async () => {
    if (!validateEmail(email)) {
      toast.error("Nhập lại email");
    } else {
      const res = await loginApi({
        email: email,
        password: password,
      });
      if (res) {
        dispatch(loginSuccess());
        dispatch(updateToken({ token: res.lastToken }));
        toast.success("Success");
        navigate("/manager");
      }
    }
  };

  return (
    <div className="container">
      <LoginWrapper flexDirection={"column"} alignItems={"center"}>
        <h1>Đăng nhập Admin</h1>
        <Form>
          <Input
            label="Email"
            type="text"
            placeholder="Nhập email"
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
