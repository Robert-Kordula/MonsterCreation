import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function TablePaginator(props) {
    let rowOptions = props.rowOptions;
    const [rowsPerPage, setRowsPerPage] = props.useRows;
    const [page, setPage] = props.usePage;
    const [isButtonEnabled, setIsButtonEnabled] = useState({ left: false, right: true })
    let maxPages = Math.ceil(props.count / rowsPerPage);

    const changeRows = (event) => {
        setRowsPerPage(event.target.value);
        setPage(1);
        maxPages = Math.ceil(props.count / rowsPerPage);
    }

    const leftPage = () => {
        console.log('PREVIOUS PAGE');
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const rightPage = () => {
        console.log('NEXT PAGE');
        if (page < maxPages) {
            setPage(page + 1);
        }
    }

    const end = () => {
        let total = rowsPerPage * page;
        if (total > props.count) {
            return props.count;
        }
        return total;
    }

    useEffect(() => {
        console.log(`Max Pages: ${maxPages}\nCurrent Page: ${page}`);
        if (page === 1) {
            setIsButtonEnabled((prevState) => ({...prevState, left: false}));
        } else if (page > 1) {
            setIsButtonEnabled((prevState) => ({...prevState, left: true}));
        }
        if (page < maxPages) {
            setIsButtonEnabled((prevState) => ({...prevState, right: true}));
        } else if (page === maxPages) {
            setIsButtonEnabled((prevState) => ({...prevState, right: false}));
        }
        //eslint-disable-next-line
    }, [page, rowsPerPage]);

    return (
        <Box
            sx={{ display: 'inline-block' }}
        >
            <label>Rows per page: </label>
            <select
                onChange={changeRows}
            >
                {rowOptions.map((rows) => (<option value={rows}>{rows}</option>))}
            </select>
            <p>{`${rowsPerPage * (page - 1) + 1}-${end()} of ${props.count}`}</p>
            <Button
                disabled={!isButtonEnabled.left}
                onClick={leftPage}
            >LEFT</Button>
            <Button
                disabled={!isButtonEnabled.right}
                onClick={rightPage}
            >RIGHT</Button>
        </Box>
    );
}