import React, { useEffect, useState } from "react";
import { Form, LoginWrapper } from "./style";
import { ABI, CONTRACT_ADDRESS } from "../constant/contract";
import { ethers } from "ethers";

export const ExistingUser = () => {
  const [data, setData] = useState(["abc", "abc"]);
  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum, "any");
  const [read, setRead] = useState(
    new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER)
  );

  useEffect(() => {
    getMyParties();
  }, []);

  const getMyParties = () => {
    read
      .getMyPartyList()
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <LoginWrapper flexDirection={"column"} alignItems={"center"}>
        <h1>My Parties</h1>
        <div className="list-group">
          {data.map((item, index) => {
            return (
              <a
                className="list-group-item list-group-item-action flex-column align-items-start"
                style={{ width: "500px" }}
                key={index}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{item.name}</h5>
                </div>
                <p className="mb-1">{item.email}</p>
                <small className="text-muted">{item.id_}</small>
              </a>
            );
          })}
        </div>
      </LoginWrapper>
    </div>
  );
};
