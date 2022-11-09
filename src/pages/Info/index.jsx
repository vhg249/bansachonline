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
import { VerticleTimelineElement } from "../../shared/components/VerticleTimelineElement";
import { Barcode } from "../../shared/components/Barcode";
export const Info = () => {
  // const productHistory = [
  //   {
  //     name: "Test1",
  //     type: "test1",
  //     email: "test@gmail.com",
  //     id_: "35dfd5...o2353",
  //     date: "20/10/2022",
  //   },
  //   {
  //     name: "Test1",
  //     type: "test1",
  //     email: "test@gmail.com",
  //     id_: "35dfd5...o2353",
  //     date: "21/10/2022",
  //   },
  //   {
  //     name: "Test1",
  //     type: "test1",
  //     email: "test@gmail.com",
  //     id_: "35dfd5...o2353",
  //     date: "20-10-2022",
  //   },
  // ];

  const { id } = useParams();
  const token = useSelector((state) => state.account.token);
  const [productHistory, setProductHistory] = useState([]);

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
  const handleBuy = async () => {
    if (!localStorage.getItem("username")) {
      toast.error("You are not login!");
    } else {
      // write
      //   .buy(data._id, quantity, {
      //     value: ethers.utils.parseEther((data.price * quantity).toString()),
      //   })
      //   .then((res) => {
      //     console.log("buy: ", res);
      //     if(res) toast.success("Success")
      //   }).catch((err) => {
      //     toast.error(err.data.message);
      //     // console.log(err.data.message);
      //   });
    }
  };

  const getRole = (role) => {
    switch (role) {
      case 0:
        return "Nhà sản xuất";
      case 1:
        return "Nhà cung cấp";
      case 2:
        return "Nhà phân phối";
      default:
        break;
    }
  };

  const getProductDetail = () => {
    read.getSpecificProduct(id).then((info) => {
      setData(info[0]);
      let historyData = [];
      info[1].map((item) => {
        if (
          item.id_ === "0x0000000000000000000000000000000000000000" ||
          !item.id_
        ) {
        } else {
          read
            .getParty(item.id_)
            .then((history) => {
              let obj = {
                name: history.name,
                type: getRole(Number(history.role)),
                email: history.email,
                id_: history.id_,
                date: Date(Number(history.date)),
              };
              historyData.push(obj);
              setProductHistory(historyData);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    });
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div className="container">
      <Wrapper>
        <div>
          <img className="img" src={data?.productImage} />
        </div>
        <FlexRight>
          <p className="title">{data?.title}</p>
          {/* <p className="review">{data?.author}</p> */}
          <p className="price">{Number(data?.price)} BNB</p>
          <div className="line"></div>
          <div className="flex">
            <input
              type="number"
              placeholder="quantity"
              onChange={(e) => onChangeQuantity(e)}
            />
            {/* <img onClick={addToCard} src={add} /> */}
            <img onClick={handleBuy} src={add} />
          </div>
          <Content>
            <p>
              Tags:<span> Food </span>
            </p>
            {data?.barcodeId && <Barcode data={data?.barcodeId} />}
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
          productHistory.map((data, index) => (
            <VerticleTimelineElement data={data} key={index} />
          ))}
      </VerticalTimeline>
    </div>
  );
};
