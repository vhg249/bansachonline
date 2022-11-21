import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../../constant";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { WrapTable } from "../style";
import { Link } from "react-router-dom";
import Web3 from "web3";
import { ABI, CONTRACT_ADDRESS } from "../../constant/contract";
import { ethers } from "ethers";

export const Bill = () => {
  const token = useSelector((state) => state.account.token);
  const [bills, setBills] = useState([]);
  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum, "any");
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const myContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
  const [read, setRead] = useState(
    new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER)
  );

  useEffect(() => {
    web3.eth.getBalance(CONTRACT_ADDRESS).then((res) => {
      console.log(res / 1e18);
    });

    myContract
      .getPastEvents("bought", { fromBlock: "earliest", toBlock: "latest" })
      .then((res) => {
        // console.log("events", res);
        if (res) {
          let allBills = [];
          res.map((item) => {
            // console.log(item.returnValues.barcodeId);
            read
              .getSpecificProduct(item.returnValues.barcodeId)
              .then((product) => {
                // console.log("product", product);
                let obj = {
                  name: product[0].title,
                  price: Number(product[0].price) * 1e18,
                  buyer: item.returnValues.buyer,
                  quantity: item.returnValues.quantity,
                  totalPrice: Number(item.returnValues.totalPrice) * 1e18,
                  hash: item.blockHash,
                };
                allBills.push(obj);
                // console.log(allBills);
                setBills(allBills);
              });
          });
        }
      });
  }, []);

  const getBills = async () => {
    try {
      const res = await axios.get(`${API_URL}/Bill/getListBill`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setBills(res.data.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WrapTable>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">STT</TableCell>
            <TableCell align="center">Tên</TableCell>
            <TableCell align="center">Người mua</TableCell>
            <TableCell align="center">Đơn giá</TableCell>
            <TableCell align="center">Số lượng</TableCell>
            <TableCell align="center">Tổng</TableCell>
            <TableCell align="center">Block hash</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bills &&
            bills.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>

                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.buyer}</TableCell>
                <TableCell align="center">
                  {Number(row.price / 1e18)} BNB
                </TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">
                  {Number(row.totalPrice / 1e18)} BNB
                </TableCell>
                <TableCell align="center">{row.hash}</TableCell>
                {/* <TableCell align="center">
                  <Link to={row._id}>
                    <Button>Edit</Button>
                  </Link>

                </TableCell> */}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </WrapTable>
  );
};
