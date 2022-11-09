import React, { useEffect, useState } from "react";
import { Card } from "../../shared/components/Card";
import { Categories, Wrapper, List, SearchInput } from "./style";
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

export const Products = () => {
  const [isActive, setIsActive] = useState("");
  const [name, setName] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [str, setStr] = useState([]);

  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum, "any");
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const [read, setRead] = useState(
    new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER)
  );

  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  const getProduct = () => {
    read.getAllProducts().then((res) => {
      // console.log(res);
      
      setData(res)
    }).catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    getProduct();
    // getCategory();
  }, []);
  const onSearch = (e) => {
    setSearchValue(e.target.value);
    axios
      .get(`${API_URL}/Book/getListBook?name=${searchValue}`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    setSearchValue(e.target.value.name);
    if (e.target.value.name.length > 0) {
      axios
        .get(`${API_URL}/Book/getListBook?category=${e.target.value.name}`)
        .then(function (response) {
          setData(response.data.data.result);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
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
        <List>
          {data.map((item, index) => {
            return (
              <a href={`/products/${item.barcodeId}`} key={index}>
                <Card data={item} />
              </a>
            );
          })}
        </List>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
<div className="modal fade" id="exampleModal">

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
</div>
      </div>
    </Wrapper>
  );
};
