import React, { useState, useEffect } from 'react';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';


export default function DynamicCell(props) {
    
    const [rows, setRows] = props.useRows;
    const [row, setRow] = props.useRow;
    const [,setData] = props.useData;
    const index = props.index;
    const header = props.header;
    const label = props.label;

    useEffect(() => {
        let tempRows = [...rows];
        tempRows.splice(index, 1, props.row);
        setRows(tempRows);
        //eslint-disable-next-line
    }, [row])

    const handleChange = (event) => {
        setRow((prevState) => ({
            ...prevState,
            [header]: event.target.value
        }));
    }

    return (
        <TableCell>
            <TextField
                value={row[header] || ''}
                onChange={handleChange}
            />
        </TableCell>
    )
}