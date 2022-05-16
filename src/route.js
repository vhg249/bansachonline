import React from "react";
import {Route, Routes} from "react-router-dom";
import {Products} from "./pages/products";
import {Login} from "./pages/login";
import {Signup} from "./pages/signup";
import {LoginAdmin} from "./pages/login-admin";
import {Cart} from "./pages/cart";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/login-admin" element={<LoginAdmin />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    );
};
export default Router;
