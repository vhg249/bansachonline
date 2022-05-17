import React from "react";
import {AdminWrapper, Content} from "./style";
import { Sidebar } from "../../shared/components/Sidebar";
import {Link,Outlet} from "react-router-dom";

export const Admin = () => {
  return (
    <>
      <AdminWrapper>
        <Sidebar />
          <Content>
              <Outlet/>
          </Content>
      </AdminWrapper>
    </>
  );
};
