import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function TablePaginator(props) {
    let rowOptions = props.rowOptions;
    const [rowsPerPage, setRowsPerPage] = props.useRows;
    const [page, setPage] = props.usePage;

    const changeRows = (event) => {
        setRowsPerPage(event.target.value);
    }
    return (
        <Box>
            <label>Rows per page: </label>
            <select
                onChange={changeRows}
            >
                {rowOptions.map((rows) => (<option value={rows}>{rows}</option>))}
            </select>
            <p>{`${props.start}-${props.end} of ${props.dataLength}`}</p>
        </Box>
    );
}