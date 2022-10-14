import React, { useEffect, useState } from "react";
import { AdminWrapper, Content } from "./style";
import { Sidebar } from "../../shared/components/Sidebar";
import { Link, Outlet } from "react-router-dom";
import Web3 from "web3";
import { ABI, CONTRACT_ADDRESS } from "../constant/contract";
import { ethers } from "ethers";

export const Admin = () => {
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum, "any");

  useEffect(() => {
    console.log("balance");
    web3.eth.getBalance(CONTRACT_ADDRESS).then((res) => {
      console.log(res / 1e18);
    });
    PROVIDER.on("bought", (_productId, _buyer, _price, _quantity) => {
      console.log("bought event: ", _productId, _buyer, _buyer, _quantity);
    });
  }, []);

  
  return (
    <>
      <AdminWrapper>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </AdminWrapper>
    </>
  );
};
