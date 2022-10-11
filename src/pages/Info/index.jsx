import { FlexRight, Wrapper, Content, SearchInput, Chat } from "./styles";
import product from "../../assets/images/product-big.png";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import add from "../../assets/images/Add-to-card.png";
import chatIcon from "../../assets/images/Chat-icon.png";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constant";
import {useDispatch, useSelector} from "react-redux";

export const Info = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.account.token);

  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const onChangeQuantity = (e) =>{
      setQuantity(e.target.value);
  }
  const addToCard = () =>{
    axios.post(`${API_URL}/Order/insert`,{
        bookid: id,
        price: data.price,
        quantity: quantity,
        
    },{
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(function (response) {
        console.log(response);
        toast.success("Đã thêm vào giỏ hàng")
        navigate("/cart")
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Error")
      });
  }
  const handleBuy = () =>{
    axios.post(`${API_URL}/bills`,{
        title: data.title,
        price: data.price,
        quantity: quantity,
        username: localStorage.getItem("username"),
        address:"Ha Dong, Ha Noi",
        hash_bill:"idfeeebakhfsksdfir924823r23ef"
        
    },{
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(function (response) {
        // console.log(response);
        toast.success("Đã mua thanh cong!");
        // navigate("/cart");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Error")
      });
  }
  const getBookById = () => {
    axios.get(`${API_URL}/products/${id}`)
      .then(function (response) {
        console.log(response);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getBookById();
  }, [])
  return (
    <div className="container">
      <Wrapper>
        <div>
          <img className="img" src={data?.image} />
        </div>
        <FlexRight>
          <p className="title">
            {data?.title}
          </p>
          <p className="review">{data?.author}</p>
          <p className="price">${data?.price}</p>
          <div className="line"></div>
          <div className="flex">
            <input type="number" placeholder="quantity" onChange={(e) => onChangeQuantity(e)} />
            {/* <img onClick={addToCard} src={add} /> */}
            <img onClick={handleBuy} src={add} />

          </div>
          <Content>


            <p>Color:<span> ELN001 </span></p>
            {/* <p>Categories:<span>{data?.category.map((item) => { return `${item}, ` })}</span></p> */}
            <p>Tags:<span> Sweet, Vegetables, Food </span></p>

          </Content>

        </FlexRight>

      </Wrapper>
      <h3>Description</h3>
      <Content>
        <p>{data?.describe}</p></Content>
      
    </div>
  );
};

