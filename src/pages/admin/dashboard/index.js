import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import Web3 from 'web3';
import { ABI, CONTRACT_ADDRESS } from "../../constant/contract";

export const Dashboard = () => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        web3.eth.getBalance(CONTRACT_ADDRESS).then((res) => {
            console.log(res/1e18);
            setBalance(res/1e18)
          })
    }, [])
    return(
        <>
            <Card style={{"padding": "10px", "marginBottom": "10px"}}>Address: {CONTRACT_ADDRESS}</Card>
            <Card style={{"padding": "10px"}}>Balance: {balance} BNB</Card>
        </>
    )
}

