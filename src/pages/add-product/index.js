import React, { useEffect, useState } from "react";
import { Form, LoginWrapper } from "./style";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constant";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateToken } from "../../redux/actions/accounts";
import { ABI, CONTRACT_ADDRESS } from "../constant/contract";
import { ethers } from "ethers";

export const AddProduct = () => {
  const [price, setPrice] = useState("1");
  const [barcode, setBarcode] = useState("8934673581349");
  const [title, setTitle] = useState("Sữa Vinamilk");
  const [description, setDescription] = useState("Đây là sữa tươi.");
  const [image, setImage] = useState(
    "https://www.vinamilk.com.vn/sua-tuoi-vinamilk/wp-content/uploads/2022/03/SN_b0.png"
  );
  const [manufacturerName, setManufacturerName] = useState(
    "Trang trại sữa Vinamilk"
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum, "any");
  const [write, setWrite] = useState();
  const [signer, setSigner] = useState();

  useEffect(() => {
    setSigner(PROVIDER.getSigner());
  }, []);

  useEffect(() => {
    // console.log(signer);
    if (signer) {
      setWrite(new ethers.Contract(CONTRACT_ADDRESS, ABI, signer));
    }
  }, [signer]);
  

  const validate = () => {
    if (
      description === "" ||
      image === "" ||
      manufacturerName === "" ||
      title === "" ||
      price === "" ||
      barcode === ""
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return false;
    }
  };

  const addProduct = () => {
    // if(!validate()) return;
    
    let productObj = {
      title: title,
      desc: description,
      manufacturerName: manufacturerName,
      manufacturer: localStorage.getItem('walletAddress'),
      barcodeId: barcode,
      productImage: image,
      price: Number(price)
    };
    
    console.log(productObj, Date.now());
    write.addProduct(productObj, Date.now()).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <div className="container">
      <LoginWrapper flexDirection={"column"} alignItems={"center"}>
        <h1>Thêm sản phẩm</h1>
        <Form>
          <Input
            label="Tên sản phẩm"
            type="text"
            placeholder="Nhập tên"
            required={true}
            value={title}
            setValue={setTitle}
          />
          <Input
            label="Mô tả"
            type="text"
            placeholder="Nhập mô tả"
            required={true}
            value={description}
            setValue={setDescription}
          />
          <Input
            label="Tên nhà sản xuất"
            type="text"
            placeholder="Nhập tên nhà sản xuất"
            required={true}
            value={manufacturerName}
            setValue={setManufacturerName}
          />
          <Input
            label="Nhập tên nhà sản xuất"
            type="text"
            placeholder="Nhập tên nhà sản xuất"
            required={true}
            value={manufacturerName}
            setValue={setManufacturerName}
          />
          <Input
            label="Nhập barcode"
            type="text"
            placeholder="Nhập barcode"
            required={true}
            value={barcode}
            setValue={setBarcode}
          />
          <Input
            label="Ảnh"
            type="text"
            placeholder="Nhập url"
            required={true}
            value={image}
            setValue={setImage}
          />
          <Input
            label="Giá"
            type="number"
            placeholder="Nhập giá"
            required={true}
            value={price}
            setValue={setPrice}
          />

          <Button onClick={addProduct}>Lưu </Button>
        </Form>
      </LoginWrapper>
    </div>
  );
};
