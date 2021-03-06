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

export const Products = () => {
    const [isActive, setIsActive] = useState('');
    const [name, setName] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const [str, setStr] = useState([]);


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
    useEffect(() => {
        getBook();
        getCategory();
    }, [])
    useEffect(() => {
        console.log(name, isActive);
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
        //             .get(`${API_URL}/Book/getListBook?category=${name}category=Ti???u Thuy???t`)
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

    }, [name, isActive])
    const onSearch = (e) => {
        setSearchValue(e.target.value);
        axios
            .get(`${API_URL}/Book/getListBook?name=${searchValue}`)
            .then(function (response) {
                setData(response.data.data.result);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleChange = (e) => {
        setSearchValue(e.target.value.name);
        if (e.target.value.name.length>0) {
            axios
                .get(`${API_URL}/Book/getListBook?category=${e.target.value.name}`)
                .then(function (response) {
                    setData(response.data.data.result);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }
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
                        onChange={handleChange}
                    >
                        {category && category.map((item, index) => {
                            return (
                                <MenuItem key={index} value={item}>{item.name}</MenuItem>)
                        })}


                    </Select>
                </div>
            </Categories>
            <div>
                <SearchInput>
                    <input onChange={onSearch} type="text" placeholder="T??m ki???m s???n ph???m" />
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