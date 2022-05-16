import React from "react";
import {Route, Routes} from "react-router-dom";
import {Products} from "./pages/products";
import {Login} from "./pages/login";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />}/>
        </Routes>
    );
};
export default Router;
