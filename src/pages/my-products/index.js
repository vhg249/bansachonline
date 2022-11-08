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

  const getBook = () => {
    read.getCounter().then((count) => {
        const total = Number(count);
        let books=[];
        for(let i=0; i<total-1; i++){
            read.products(i).then((res) => {
                let obj = {
                    title: res.title,
                    price: Number(res.price)/1e18,
                    image: res.image,
                    desc: res.desc,
                    _id: Number(res.productId)
                }
                books.push(obj);
                // console.log(books);
                setData(books)
            })
        }
    })
    // axios
    //   .get(`${API_URL}/products`)
    //   .then(function (response) {
    //     // console.log(response);
    //     setData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  const getCategory = () => {
    axios
      .get(`${API_URL}/Category/getListCategory`)
      .then(function (response) {
        // console.log(response);
        setCategory(response.data.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getBook();
    // getCategory();
  }, []);
  useEffect(() => {
    // console.log(name, isActive);
    // let strNew = [...str];
    // let query="";
    // if (isActive) {
    //     let checkSame=false;
    //     for (let i = 0; i < strNew.length; i++) {
    //         if (name === strNew[i]){
    //                 checkSame=true;
    //         }
    //     }
    //     if(checkSame){
    //         for (let i = 0; i < strNew.length; i++) {
    //             query += `category=${strNew[i]}`;
    //         }
    //     }
    //     console.log("strNew",strNew,query);
    // }
    // else{
    //     const new_arr = strNew.filter(item => item !== name);
    //     console.log("new arr",new_arr);
    // }
    // if (name)
    //     if (isActive) {
    //         axios
    //             .get(`${API_URL}/Book/getListBook?category=${name}category=Tiểu Thuyết`)
    //             .then(function (response) {
    //                 console.log(response);
    //                 setData(response.data.data.result);
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     }
    //     else {
    //     }
  }, [name, isActive]);
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
            // onChange={onSearch}
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
              // <a href={`/products/${item._id}`} key={index}>
                <CardSell data={item} />
              // </a>
            );
          })}
        </List>
      </div>
    </Wrapper>
  );
};
