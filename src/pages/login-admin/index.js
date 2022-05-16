import React from "react";
import { Form, LoginWrapper } from "./style";
import { Input } from "../../shared/components/Input";
import {Button} from "../../shared/components/Button";
import {Link} from "react-router-dom";

export const LoginAdmin = () => {
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
          />
          <Input
            label="Mật khẩu"
            type="password"
            placeholder="Nhập mật khẩu"
            required={true}
          />
          <div className="link">
            Bạn chưa có tài khoản?
            <Link to="/signup">Đăng ký</Link>
          </div>
          <Button>Đăng nhập</Button>
        </Form>
      </LoginWrapper>
    </div>
  );
};
