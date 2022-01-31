import React, { useEffect } from 'react';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';


export default function DynamicCell(props) {
    
    const [rows, setRows] = props.useRows;
    const [row, setRow] = props.useRow;
    const index = props.index;
    const header = props.header;

    useEffect(() => {
        if (!props.isInitial) {
            let tempRows = [...rows];
            tempRows.splice(index, 1, row);
            setRows(tempRows);
        }
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