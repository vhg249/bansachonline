import { useEffect, useState } from "react";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";

import { Form, Flex } from "./styles";
import { API_URL } from "../../constant";
import axios from "axios";
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { toast } from "react-toastify";

export const Store = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [data, setData] = useState([]);
  const [dataSlect, setDataSlect] = useState();
  const token = useSelector((state) => state.account.token);


  const getBook = () => {
    axios
      .get(`${API_URL}/Book/getListBook`)
      .then(function (response) {
        console.log(response);
        setData(response.data.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getBook();
  }, []);
  const handleChange = (e) =>{
        setDataSlect(e.target.value);

  }
  const importBook = ()=>{
    axios
      .put(`${API_URL}/Book/import`,{
          _id:dataSlect._id,
          quantity:quantity
      },{
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }})
      .then(function (response) {
        console.log(response);
        toast.success("Nhap hang thanh cong")
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Loi")

      });
  };
  const exportBook = ()=>{
      if(quantity>dataSlect.quantity){
        toast.error("Số Lượng Không Đủ")

      }
    axios
      .put(`${API_URL}/Book/import`,{
          _id:dataSlect._id,
          quantity:dataSlect.quantity
      },{
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }})
      .then(function (response) {
        console.log(response);
        toast.success("Xuat hang thanh cong")
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Loi")

      });
  };
  return (
    <>
      <h1>Store</h1>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Tên sách</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={dataSlect}
    label="Tên sách"
    onChange={handleChange}
  >
      {data.length>0&&data.map((item,index)=>{
          return (
          <MenuItem key={index} value={item}>{item.name}</MenuItem>)
      })}
    
    
  </Select>
</FormControl>
      <Form>
        <Input
          label="Số lượng"
          type="number"
          placeholder="Nhập số lượng"
          required={true}
          value={quantity}
          setValue={setQuantity}
        />
        <Flex>
          <Button onClick={()=>importBook()}>Nhập hàng</Button>
          <Button onClick={()=>exportBook()}>Xuất hàng</Button>
        </Flex>
      </Form>
    </>
  );
};
