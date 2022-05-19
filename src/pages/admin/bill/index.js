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
import {Link} from "react-router-dom";

export const Bill = () => {
  const token = useSelector((state) => state.account.token);
  const [bills, setBills] = useState([]);

  useEffect(() => {
    getBills();
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
            <TableCell align="center">Số điện thoại</TableCell>
            <TableCell align="center">Địa chỉ</TableCell>
            <TableCell align="center">Giá</TableCell>
            <TableCell align="center">Trạng thái</TableCell>
            <TableCell align="center">Hành động</TableCell>
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
                <TableCell align="center">{row.phonenumber}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <Link to={row._id}>
                    <Button>Edit</Button>
                  </Link>

                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </WrapTable>
  );
};
