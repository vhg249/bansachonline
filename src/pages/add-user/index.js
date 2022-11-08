import React, { useState } from "react";
import { Form, LoginWrapper } from "./style";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constant";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateToken } from "../../redux/actions/accounts";

export const AddUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="container">
      <LoginWrapper flexDirection={"column"} alignItems={"center"}>
        <h1>Add user data</h1>
        <Form>
          <Input
            label="Name"
            type="text"
            placeholder="Name"
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
            label="Address"
            type="text"
            placeholder="Address"
            required={true}
            value={address}
            setValue={setAddress}
          />
          <Button>Lưu </Button>
        </Form>
      </LoginWrapper>
    </div>
  );
};
