import React, { useEffect, useState } from "react";
import { CartWrapper } from "./style";
import { CartItem } from "./CartItem";
import { Button } from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateCheckout } from "../../redux/actions/cart";
import Web3 from "web3";
import { ABI, CONTRACT_ADDRESS } from "../constant/contract";
import { ethers } from "ethers";

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.account.isLogin);
  const token = useSelector((state) => state.account.token);
  const [cartList, setCartList] = useState([]);
  const [orderList, setOrderList] = useState([]);

  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const myContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum, "any");
  const [read, setRead] = useState(
    new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER)
  );

  useEffect(() => {
    // getBillApi();
    getBillData();
  }, []);

  const getBillApi = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/bills/${localStorage.getItem("username")}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data.data);
      setCartList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getBillData = async () => {
    await myContract
      .getPastEvents("bought", {
        fromBlock: (await web3.eth.getBlockNumber()) - 4999,
        toBlock: "latest",
      })
      .then((res) => {
        console.log(res);
        let bills = [];
        res.map((item) => {
          if (
            item.returnValues.buyer.toLowerCase() ==
            localStorage.getItem("walletAddress")
          ) {
            // console.log("item", item);
            read.products(item.returnValues.productId - 1).then((product) => {
              // console.log("ppp", product);
              let obj = {
                title: product.title,
                image: product.image,
                price: Number(product.price) / 1e18,
                quantity: item.returnValues.quantity,
                totalPrice: item.returnValues.totalPrice / 1e18,
                hash: item.blockHash,
              };
              bills.push(obj);
              setCartList(bills);
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const checkoutPayment = async () => {
  //   try{
  //     const res = await axios.post(
  //         `${API_URL}/Bill/checkout`,
  //         { orderlist: orderList },
  //         {
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json"
  //           },
  //         }
  //     );
  //     if(res.data.data.result){
  //       dispatch(updateCheckout({checkoutResult: res.data.data}));
  //       // navigate("/payment");
  //     }
  //   } catch (err){
  //     console.log(err);
  //     toast.error(err.response.data.message);
  //   }
  // };

  // const selectOrder = (idOrder) => {
  //   let arr = orderList;
  //   if (orderList.includes(idOrder)) {
  //     arr = arr.filter((item) => item !== idOrder);
  //   } else {
  //     arr.push(idOrder);
  //   }
  //   setOrderList(arr);
  //   console.log(arr);
  // };

  return (
    <div className="container">
      <CartWrapper>
        <h1>Lịch sử đơn hàng ({cartList ? cartList.length : 0} đơn)</h1>
        <div>
          {cartList &&
            cartList.map((item, index) => (
              <CartItem data={item} key={index} requestFetch={getBillApi} />
            ))}
        </div>
        <Button onClick={() => navigate("/")}>Back to shop</Button>
      </CartWrapper>
    </div>
  );
};
