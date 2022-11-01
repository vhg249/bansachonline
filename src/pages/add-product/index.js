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

export const AddProduct = () => {
  const [firstName, setFirstName] = useState("Nguyen");
  const [lastName, setLastName] = useState("Huong");
  const [username, setUsername] = useState("Đắc nhân tâm");
  const [password, setPassword] = useState("Đây là quyển sách duy nhất về thể loại self-help liên tục đứng đầu danh mục sách bán chạy nhất (best-selling Books) do báo The New York Times bình chọn suốt 10 năm liền. Riêng bản tiếng Anh của sách đã bán được hơn 15 triệu bản trên thế giới. Tác phẩm có sức lan toả vô cùng rộng lớn – dù bạn đi đến bất cứ nơi đâu, bất kỳ quốc gia nào cũng đều có thể nhìn thấy. Tác phẩm được đánh giá là quyển sách đầu tiên và hay nhất, có ảnh hưởng làm thay đổi cuộc đời của hàng triệu người trên thế giới.");
  const [confirmPassword, setConfirmPassword] = useState("19/10/2012");
  const [email, setEmail] = useState("bbb@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-dac-nhan-tam.jpg");
  const [address, setAddress] = useState("Alex White");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState("");


  

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (inputtxt) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneno.test(inputtxt);
  };

  const validate = () => {
    if (
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      phoneNumber === "" ||
      address === "" ||
      username === "" ||
      firstName === "" ||
      lastName === ""
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return false;
    } else if (!validateEmail(email)) {
      toast.error("Nhập lại ");
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Mật khẩu không khớp");
      return false;
    } else {
      return true;
    }
  };

 

  return (
    <div className="container">
      <LoginWrapper flexDirection={"column"} alignItems={"center"}>
        <h1>Thêm sản phẩm</h1>
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
            label="Tên sản phẩm"
            type="text"
            placeholder="Nhập tên"
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
            label="Tác giả"
            type="text"
            placeholder="Nhập tác giả"
            required={true}
            value={address}
            setValue={setAddress}
          />
          <Input
            label="Ảnh"
            type="text"
            placeholder="Nhập url"
            required={true}
            value={phoneNumber}
            setValue={setPhoneNumber}
          />
          <Input
            label="Miêu tả"
            type="text"
            placeholder="Nhập miêu tả"
            required={true}
            value={password}
            setValue={setPassword}
          />
          <Input
            label="Nhập ngày xuất bản"
            type="text"
            placeholder="Nhập ngày xuất bản"
            required={true}
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
         
          <Button>Lưu </Button>
        </Form>
      </LoginWrapper>
    </div>
  );
};
