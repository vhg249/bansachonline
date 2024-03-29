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
import { MyInfo } from "./pages/MyInfo";

import { Payment } from "./pages/payment";
import { Store } from "./pages/admin/store";
import { Voucher } from "./pages/voucher";
import { UserBill } from "./pages/user-bill";
import { BillDetail } from "./pages/bill-detail";
import { AddBook } from "./pages/admin/product/add";
import { UpdateBook } from "./pages/admin/product/update";
import { EditBill } from "./pages/admin/bill/editBill";
import { Profile } from "./pages/profile";
import { Vouchers } from "./pages/admin/vouchers";
import { EditVoucher } from "./pages/admin/vouchers/editVoucher";
import { ChangePassword } from "./pages/change-password";
import {Dashboard} from "./pages/admin/dashboard";
import { AddProduct } from "./pages/add-product";
import { AddUser } from "./pages/add-user";
import { MyProducts } from "./pages/my-products";
import { ExistingUser } from "./pages/existing-user";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/products/:id" element={<Info />} />
      <Route path="/my-products-info/:id" element={<MyInfo />} />

      <Route path="/add-product/" element={<AddProduct />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/my-products" element={<MyProducts />} />
      <Route path="/existing-user" element={<ExistingUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-admin" element={<LoginAdmin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/history" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/user-bill" element={<UserBill />} />
      <Route path="/user-bill/:id" element={<BillDetail />} />
      <Route path="/voucher" element={<Voucher />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/manager" element={<Admin />}>
        <Route path="user" element={<User />} />
        <Route path="product" element={<Product />} />
        <Route path="bill" element={<Bill />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="store" element={<Store />} />
        <Route path="add-book" element={<AddBook />} />
        <Route path="update-book/:id" element={<UpdateBook />} />
        <Route path="voucher" element={<Vouchers />} />
        <Route path="voucher/:id" element={<EditVoucher />} />
        <Route path="bill/:id" element={<EditBill />} />
      </Route>
    </Routes>
  );
};
export default Router;
