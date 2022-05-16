import React, { useState } from "react";
import { HeaderWrapper, Profile, SearchInput } from "./style";
import logo from "../../../assets/images/Logo.png";
import searchIcon from "../../../assets/images/search.png";
import profileIcon from "../../../assets/images/profile.png";
import cartIcon from "../../../assets/images/cart.png";
import Flex from "../Flex";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="container flex">
        <img src={logo} alt={"logo"} />
        <SearchInput>
          <input type="text" placeholder="Tìm kiếm sản phẩm" />
          <div className="icon">
            <img src={searchIcon} alt={"search"} />
          </div>
        </SearchInput>
        <Flex gap="24px">
          <Profile>
            <img src={profileIcon} alt={"profile"} />
            <div>
              <p>My Account</p>
              <Link to={"login"}>
                <p className="bold">Login</p>
              </Link>
            </div>
          </Profile>
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
