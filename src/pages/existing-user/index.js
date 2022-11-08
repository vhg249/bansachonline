import React, { useState } from "react";
import { Form, LoginWrapper } from "./style";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constant";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateToken } from "../../redux/actions/accounts";

export const ExistingUser = () => {
  const [data, setData] = useState(["abc","abc"]);

  return (
    <div className="container">
      <LoginWrapper flexDirection={"column"} alignItems={"center"}>
        <h1>Existing user data</h1>
        <div class="list-group">
          {data.map((item,index)=>{
            return(
            <a class="list-group-item list-group-item-action flex-column align-items-start" style={{width:"500px"}}>
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">TranHuy3737</h5>
                        {/* <small class="text-muted">3 days ago</small> */}
                      </div>
                      <p class="mb-1">huy@gmail.com</p>
                      <small class="text-muted">21897bbfb1bfb3817dv</small>
                    </a>
          )})}
        
  
</div>
      </LoginWrapper>
    </div>
  );
};
