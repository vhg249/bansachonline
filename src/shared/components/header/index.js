import React, { useState } from "react";
import { HeaderWrapper, SearchInput } from "./style";
import logo from "../../../assets/images/Logo.png";

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="container flex">
        <img src={logo} alt={"logo"} />
        <SearchInput>
          <input type="text" placeholder="Tìm kiếm sản phẩm" />
        </SearchInput>
      </div>
    </HeaderWrapper>
  );
};
