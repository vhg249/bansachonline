import React, {useEffect, useState} from "react";
import { HeaderWrapper, Profile, SearchInput } from "./style";
import logo from "../../../assets/images/Logo.png";
import searchIcon from "../../../assets/images/search.png";
import profileIcon from "../../../assets/images/profile.png";
import cartIcon from "../../../assets/images/cart.png";
import Flex from "../Flex";
import {Link} from "react-router-dom";
import {MenuProfile} from "../MenuProfile";
import axios from "axios";
import {API_URL} from "../../../pages/constant";
import {useSelector} from "react-redux";

export const Header = () => {
  const [myProfile, setMyProfile] = useState();
  const isLogin = useSelector((state) => state.account.isLogin);
  const token = useSelector((state) => state.account.token);

  useEffect(() => {
    if(isLogin){
      getMeApi();
    }
  }, [isLogin]);

  const getMeApi = async () => {
    try {
      const res = await axios.get(`${API_URL}/auth/getMe`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      console.log(res.data.data)
      setMyProfile(res.data.data);
    } catch (err){
      console.log(err)
    }
  }

  return (
    <HeaderWrapper>
      <div className="container flex">
        <Link to="/">
          <img className="logo" src={logo} alt={"logo"} />
        </Link>

        <Flex gap="24px">
          <MenuProfile profile={myProfile}/>
          <Profile>
            <Link to="/cart">
              <img src={cartIcon} alt={"profile"} />
            </Link>
          </Profile>
        </Flex>
      </div>
    </HeaderWrapper>
  );
};
