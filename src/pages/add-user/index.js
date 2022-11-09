import React, { useEffect, useState } from "react";
import { Form, LoginWrapper } from "./style";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ABI, CONTRACT_ADDRESS } from "../constant/contract";
import { ethers } from "ethers";

export const AddUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [myRole, setMyRole] = useState();

  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum, "any");
  const [signer, setSigner] = useState();
  const [read, setRead] = useState(
    new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER)
  );
  const [write, setWrite] = useState();

  useEffect(() => {
    setSigner(PROVIDER.getSigner());
    setRead(new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER));
  }, []);

  useEffect(() => {
    if (signer) {
      setWrite(new ethers.Contract(CONTRACT_ADDRESS, ABI, signer));
    }
  }, [signer]);

  useEffect(() => {
    console.log(myRole);
  }, [myRole]);

  const addParty = () => {
    let myAddress = localStorage.getItem("walletAddress");
    if (!myAddress) return;
    read
      .getUser(myAddress)
      .then((profile) => {
        // console.log(profile);
        setMyRole(profile.role);
        let obj = {
          role: getRoleParty(Number(profile.role)),
          id_: address,
          name: username,
          email: email,
        };
        write
          .addParty(obj)
          .then((res) => {
            // console.log("party", res);
            toast.success("Thêm đối tác thành công");
            navigate("/existing-user");
          })
          .catch((err) => {
            console.log(err);
            toast.error("Error");
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRoleParty = (role) => {
    console.log("role", role);
    switch (role) {
      case 0:
        return 1;
      case 1:
        return 2;
      default:
        return 0;
    }
  };

  return (
    <div className="container">
      <LoginWrapper flexDirection={"column"} alignItems={"center"}>
        <h1>Add user data</h1>
        <Form>
          <Input
            label="Name"
            type="text"
            placeholder="Name"
            required={true}
            value={username}
            setValue={setUsername}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Nhập email"
            required={true}
            value={email}
            setValue={setEmail}
          />

          <Input
            label="Address"
            type="text"
            placeholder="Address"
            required={true}
            value={address}
            setValue={setAddress}
          />
          <Button onClick={() => addParty()}>Lưu </Button>
        </Form>
      </LoginWrapper>
    </div>
  );
};
