import React from "react";
import {NavItem, SidebarWrapper} from "./style";
import {Link, NavLink} from "react-router-dom";
import { Tab, Tabs } from "@mui/material";

export const Sidebar = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <SidebarWrapper flexDirection={"column"}>
        <NavLink to="user">
          <NavItem>User</NavItem>
        </NavLink>
        <NavLink to="product">
          <NavItem>Sản phẩm</NavItem>
        </NavLink>
        <NavLink to="bill">
          <NavItem>Hoá Đơn</NavItem>
        </NavLink>
        <NavLink to="store">
          <NavItem>Store</NavItem>
        </NavLink>
      </SidebarWrapper>
    </>
  );
};
