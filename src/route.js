import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/products";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { LoginAdmin } from "./pages/login-admin";
import { Cart } from "./pages/cart";
import { Admin } from "./pages/admin";
import {User} from "./pages/admin/user";
import {Product} from "./pages/admin/product";
import {Bill} from "./pages/admin/bill";
import { Info } from "./pages/Info";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} >
      <Route path="info" element={<Info />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/login-admin" element={<LoginAdmin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/manager" element={<Admin />} >
          <Route path="user" element={<User />} />
          <Route path="product" element={<Product />} />
          

         
          <Route path="user" element={<Bill />} />
      </Route>
    </Routes>
  );
};
export default Router;
