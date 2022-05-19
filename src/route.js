import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/products";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { LoginAdmin } from "./pages/login-admin";
import { Cart } from "./pages/cart";
import { Admin } from "./pages/admin";
import { User } from "./pages/admin/user";
import { Product } from "./pages/admin/product";
import { Bill } from "./pages/admin/bill";
import { Info } from "./pages/Info";
import { Payment } from "./pages/payment";
import { Store } from "./pages/admin/store";
import { Voucher } from "./pages/voucher";
import { UserBill } from "./pages/user-bill";
import { BillDetail } from "./pages/bill-detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="info/:id" element={<Info />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-admin" element={<LoginAdmin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/user-bill" element={<UserBill />} />
      <Route path="/user-bill/:id" element={<BillDetail />} />
      <Route path="/voucher" element={<Voucher />} />
      <Route path="/manager" element={<Admin />}>
        <Route path="user" element={<User />} />
        <Route path="product" element={<Product />} />
        <Route path="bill" element={<Bill />} />
        <Route path="store" element={<Store />} />

      </Route>
    </Routes>
  );
};
export default Router;
