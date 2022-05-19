import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Wrapper } from "../style";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constant";
import { useSelector } from "react-redux";

const columns = [
  { field: "_id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "Tên", width: 150 },
  { field: "lastName", headerName: "Họ", width: 150 },
  {
    field: "email",
    headerName: "Email", width: 200
  },
  {
    field: "phoneNumber",
    headerName: "Số điện thoại", width: 200
  },
  {
    field: "address",
    headerName: "Địa chỉ", width: 400
  },
];

export const User = () => {
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.account.token);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}/user/getListUser`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setUsers(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <h3>User</h3>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowId={(row) => row._id}
        />
      </div>
    </Wrapper>
  );
};
