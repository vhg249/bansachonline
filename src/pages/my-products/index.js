import React, { useEffect, useState } from "react";
import { Card } from "../../shared/components/Card";
import { Categories, Wrapper, List, SearchInput, LoginWrapper } from "./style";
import active from "../../assets/images/active.png";
import checkbox from "../../assets/images/checkbox.png";
import searchIcon from "../../assets/images/search.png";
import axios from "axios";
import { API_URL } from "../constant";
import { Checkboxs } from "../../shared/components/Checkbox";
import { Select, MenuItem } from "@mui/material";
import Web3 from "web3";
import { ABI, CONTRACT_ADDRESS } from "../constant/contract";
import { ethers } from "ethers";
import { CardSell } from "../../shared/components/CardSell";

export const MyProducts = () => {
  const [isActive, setIsActive] = useState("");
  const [name, setName] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [str, setStr] = useState([]);

  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum, "any");
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const [read, setRead] = useState(
    new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER)
  );

  const [data, setData] = useState(["dede"]);
  const [category, setCategory] = useState([]);

  const getMyProduct = () => {
    // read.getUser(localStorage.getItem('walletAddress')).then((res) => {
    //   console.log("user", res);
    // })
    read.getMyProducts(localStorage.getItem('walletAddress')).then((res) => {
      console.log(res);
      setData(res)
    }).catch((err) => {
      console.log(err);
    })
  }

  const getSellEvent = () => {
    console.log('call event');
    PROVIDER.on("ProductOwnershipTransfer", (_title, _manufacturerName, _barcodeId, _buyerName, _buyerEmail) => {
      console.log("bought event: ", _title, _manufacturerName, _barcodeId, _buyerName, _buyerEmail);
    });
  }

  useEffect(() => {
    setRead(new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER));
    getMyProduct()
    getSellEvent()
  }, []);

  return (
    <Wrapper>
      <Categories>
        <p className="title">Product Categories</p>
        <div className="list">
          <Select
            style={{ width: "200px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={searchValue}
            label="Product Categories"
            // onChange={handleChange}
          >
            {category &&
              category.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item.name}
                  </MenuItem>
                );
              })}
          </Select>
        </div>
      </Categories>
      <div>
        <SearchInput>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
          />
          <div className="icon">
            <img src={searchIcon} alt={"search"} />
          </div>
        </SearchInput>
        <h1>My products</h1>
        <List>
          {data.map((item, index) => {
            return (
              <a href={`/my-products-info/${item.barcodeId}`} key={index}>
                <CardSell data={item} />
              </a>
            );
          })}
        </List>
      </div>
    </Wrapper>
  );
};
