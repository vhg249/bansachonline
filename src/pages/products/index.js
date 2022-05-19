import React, { useEffect, useState } from "react";
import { Card } from "../../shared/components/Card";
import { Categories, Wrapper, List, SearchInput } from "./style";
import active from "../../assets/images/active.png";
import checkbox from "../../assets/images/checkbox.png";
import searchIcon from "../../assets/images/search.png";
import axios from "axios";
import { API_URL } from "../constant";
import { Checkbox } from "../../shared/components/Checkbox";
export const Products = () => {
    const [isActive, setIsActive] = useState('');
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);


    const getBook = () => {
        axios
          .get(`${API_URL}/Book/getListBook`)
          .then(function (response) {
            setData(response.data.data.result);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      const getCategory = () => {
        axios
          .get(`${API_URL}/Category/getListCategory`)
          .then(function (response) {
            console.log(response);
            setCategory(response.data.data.result);
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
        getCategory();
    },[])
    return (
        <Wrapper>

            <Categories>
                <p className="title">Product Categories</p>
                <div className="list">
                    {category && category.map((item,index)=>{
                        return(
                             <div key={index} className="item" onClick={() => { setIsActive(!isActive) }}>
                        <Checkbox isActive={isActive} />
                        <p>{item.name}</p>
                    </div>
                        )
                    })}
                   
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