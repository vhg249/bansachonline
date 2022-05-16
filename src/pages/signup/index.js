import React from "react";
import { Form, LoginWrapper } from "./style";
import { Input } from "../../shared/components/Input";
import {Button} from "../../shared/components/Button";
import {Link} from "react-router-dom";

export const Signup = () => {
  return (
    <div className="container">
      <LoginWrapper flexDirection={"column"} alignItems={"center"}>
        <h1>Đăng ký</h1>
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
          <Input
              label="Nhập lại mật khẩu"
              type="password"
              placeholder="Nhập mật khẩu"
              required={true}
          />
          <div className="link">
            Bạn đã có tài khoản?
            <Link to="/login">Đăng nhập</Link>
          </div>
          <Button>Đăng ký</Button>
        </Form>
      </LoginWrapper>
    </div>
  );
};
