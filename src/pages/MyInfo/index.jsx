import { FlexRight, Wrapper, Content, SearchInput, Chat } from "./styles";
import product from "../../assets/images/product-big.png";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import add from "../../assets/images/Add-to-card.png";
import chatIcon from "../../assets/images/Chat-icon.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { ABI, CONTRACT_ADDRESS } from "../constant/contract";
import { ethers } from "ethers";
import { VerticalTimeline } from "react-vertical-timeline-component";
import {VerticleTimelineElement} from "../../shared/components/VerticleTimelineElement"
import { Barcode } from "../../shared/components/Barcode";
import { Button } from "../../shared/components/Button";

export const MyInfo = () => {
  const productHistory =[
    {
      name: "Test1",
     type:"test1",
     email:"test@gmail.com",
     id_:"35dfd5...o2353",
     date:"20/10/2022"
    },
    {
      name: "Test1",
     type:"test1",
     email:"test@gmail.com",
     id_:"35dfd5...o2353",
     date:"21/10/2022"

    },
    {
      name: "Test1",
     type:"test1",
     email:"test@gmail.com",
     id_:"35dfd5...o2353",
     date:"20-10-2022"

    }
  ]
  
  const { id } = useParams();
  const token = useSelector((state) => state.account.token);

  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum, "any");
  const [signer, setSigner] = useState();
  const [read, setRead] = useState(
    new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER)
  );
  const [write, setWrite] = useState();

  useEffect(() => {
    setSigner(PROVIDER.getSigner());
    setRead(new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER));
  }, []);

  useEffect(() => {
    if (signer) {
      setWrite(new ethers.Contract(CONTRACT_ADDRESS, ABI, signer));
    }
  }, [signer]);

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const addToCard = () => {
    axios
      .post(
        `${API_URL}/Order/insert`,
        {
          bookid: id,
          price: data.price,
          quantity: quantity,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        toast.success("Đã thêm vào giỏ hàng");
        navigate("/cart");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Error");
      });
  };
  const handleBuy = async () => {
    if (!localStorage.getItem("username")) {
      toast.error("You are not login!");
    } else {
      write
        .buy(data._id, quantity, {
          value: ethers.utils.parseEther((data.price * quantity).toString()),
        })
        .then((res) => {
          console.log("buy: ", res);
          if(res) toast.success("Success")
          // axios
          //   .post(
          //     `${API_URL}/bills`,
          //     {
          //       title: data.title,
          //       price: data.price,
          //       image: data.image,
          //       quantity: quantity,
          //       username: localStorage.getItem("username"),
          //       address: "Ha Dong, Ha Noi",
          //       hash_bill: res.hash,
          //     },
          //     {
          //       headers: {
          //         Accept: "application/json",
          //         "Content-Type": "application/json",
          //         Authorization: "Bearer " + token,
          //       },
          //     }
          //   )
          //   .then(function (response) {
          //     // console.log(response);
          //     toast.success("Đã mua thanh cong!");
          //     // navigate("/cart");
          //   })
          //   .catch(function (error) {
          //     console.log(error);
          //     toast.error("Error");
          //   });
        }).catch((err) => {
          toast.error(err.data.message);
          // console.log(err.data.message);
        });
    }
  };
  const getBookById = () => {
    read.products(id-1).then((res) => {
      let obj = {
        title: res.title,
        price: Number(res.price) / 1e18,
        image: res.image,
        desc: res.desc,
        _id: Number(res.productId),
      };
      setData(obj)
    });
    
  };
  useEffect(() => {
    getBookById(); 
  }, []);
  return (
    <div className="container">
      <Wrapper>
        <div>
          <img className="img" src={data?.image} />
        </div>
        <FlexRight>
          <p className="title">{data?.title}</p>
          <p className="review">{data?.author}</p>
          <p className="price">{data?.price} BNB</p>
          <div className="line"></div>
          <div className="flex">
            {/* <input
              type="number"
              placeholder="quantity"
              onChange={(e) => onChangeQuantity(e)}
            /> */}
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select buyer</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            {/* <img onClick={addToCard} src={add} /> */}
            <Button>Sell</Button>
          </div>
          <Content>
            {/* <p>
              Color:<span> ELN001 </span>
            </p> */}
            {/* <p>Categories:<span>{data?.category.map((item) => { return `${item}, ` })}</span></p> */}
            <p>
              Tags:<span> Book </span>
            </p>
      <Barcode data={"8710428998392"} />

          </Content>
        </FlexRight>
      </Wrapper>
      <h3>Description</h3>
      <Content>
        <p>{data?.desc}</p>
      </Content>
      <h3>History</h3>
      <VerticalTimeline lineColor="black" layout="1-column">
        {productHistory &&
          productHistory.map((data) => (
            <VerticleTimelineElement data={data} key={data.id} />
          ))}
      </VerticalTimeline>
    </div>
  );
};
