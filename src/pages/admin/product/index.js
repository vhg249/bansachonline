import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

export const Product = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h3>Book</h3>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>STT</TableCell>
                        <TableCell align="right">Tên</TableCell>
                        <TableCell align="right">Tác giả</TableCell>
                        <TableCell align="right">Số lượng</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*{rightows.map((row) => (*/}
                    {/*    <TableRow*/}
                    {/*        key={row.name}*/}
                    {/*        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
                    {/*    >*/}
                    {/*        <TableCell component="th" scope="row">*/}
                    {/*            {row.name}*/}
                    {/*        </TableCell>*/}
                    {/*        <TableCell align="right">{row.calories}</TableCell>*/}
                    {/*        <TableCell align="right">{row.fat}</TableCell>*/}
                    {/*        <TableCell align="right">{row.carbs}</TableCell>*/}
                    {/*        <TableCell align="right">{row.protein}</TableCell>*/}
                    {/*    </TableRow>*/}
                    {/*))}*/}
                </TableBody>
            </Table>
        </div>
    );
}
