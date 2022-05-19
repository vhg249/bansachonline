import { useEffect, useState } from "react";
import { API_URL } from "../../constant";
import axios from "axios";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


export const Product = () => {

    const [data, setData] = useState([]);
    const [dataSlect, setDataSlect] = useState();
    const token = useSelector((state) => state.account.token);


    const getBook = () => {
        axios
            .get(`${API_URL}/Book/getListBook`)
            .then(function (response) {
                console.log(response);
                setData(response.data.data.result);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const navigate = useNavigate();

    const deleteBook = async (data) => {
        try {
            const res = await axios.delete(`${API_URL}/Book/deleteBook`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
                data: { deleteId: [data] },
            });
            if (res.data.data.result) {
                toast.success("Deleted");
                getBook();
            }
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
        }
    };
    useEffect(() => {
        getBook();
    }, []);
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h3>Book</h3>
            <a href="add-book">
                <Button variant="outlined" color="success">
                    Thêm
                </Button></a>
            <Table aria-label="simple table">
                <TableHead>

                    <TableRow>
                        <TableCell>STT</TableCell>
                        <TableCell align="right">Tên</TableCell>
                        <TableCell align="right">Tác giả</TableCell>
                        <TableCell align="right">Số lượng</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => {
                        return (
                            // <a href={`/update/${row._id}`}>
                            <TableRow
                            onClick={()=>{navigate(`/manager/update-book/${row._id}`)}}
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            ><TableCell component="th" scope="row">
                                    {row._id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.author}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right"><Button variant="outlined" color="error" onClick={() => deleteBook(row._id)}>Xóa</Button></TableCell>
                            </TableRow>
                            // </a>
                        )
                    })}
                   
                </TableBody>
            </Table>
        </div>
    );
}
