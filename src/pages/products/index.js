import React, { useEffect, useState } from "react";
import { Card } from "../../shared/components/Card";
import { Categories, Wrapper, List, SearchInput } from "./style";
import active from "../../assets/images/active.png";
import checkbox from "../../assets/images/checkbox.png";
import searchIcon from "../../assets/images/search.png";
import axios from "axios";
import { API_URL } from "../constant";
export const Products = () => {
    const [isActive, setIsActive] = useState('');
    const [data, setData] = useState([]);

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
    // let data = [{
    //     name: "abc",
    //     price: 10
    // }, {
    //     name: "abc",
    //     price: 10
    // }, {
    //     name: "abc",
    //     price: 10
    // }, {
    //     name: "abc",
    //     price: 10
    // }, {
    //     name: "abc",
    //     price: 10
    // }, {
    //     name: "abc",
    //     price: 10
    // }]
    useEffect(()=>{
        getBook();
    },[])
    return (
        <Wrapper>

            <Categories>
                <p className="title">Product Categories</p>
                <div className="list">
                    <div className="item" onClick={() => { setIsActive(!isActive) }}>
                        <img src={isActive ? active : checkbox} />
                        <p>abc abcabac</p>
                    </div>
                </div>
            </Categories>
            <div>
                <SearchInput>
                    <input type="text" placeholder="Tìm kiếm sản phẩm" />
                    <div className="icon">
                        <img src={searchIcon} alt={"search"} />
                    </div>
                </SearchInput>
                <List>
                    {data.map((item, index) => {
                        return (
                            <a href={`info/${item._id}`} key={index}>
                                <Card data={item} />
                            </a>
                        )
                    })}

                </List></div>
        </Wrapper>
    )
}