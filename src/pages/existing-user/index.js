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
            <a class="list-group-item list-group-item-action flex-column align-items-start">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-muted">3 days ago</small>
                      </div>
                      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                      <small class="text-muted">Donec id elit non mi porta.</small>
                    </a>
          )})}
        
  
</div>
      </LoginWrapper>
    </div>
  );
};
