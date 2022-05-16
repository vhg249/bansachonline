import React from "react";
import { SidebarWrapper } from "./style";
import {Link} from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
          <Link to="product">Sản phẩm</Link>
      </SidebarWrapper>
    </>
  );
};
