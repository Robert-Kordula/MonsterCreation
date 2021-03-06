import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import THead from './THead'
import TablePaginator from './TablePaginator';
import MonsterTable from './MonsterTable';

export default function FetchTable(props) {
    const [rowsPerPage, setRowsPerPage] = useState(50);
    const [page, setPage] = useState(1);
    const [searchParams, ]= props.useSearchParams
    const [,setURL] = props.useURL;
    const [count, setCount] = useState(0);
    const data = props.data;
    const rowOptions = [50, 100, 200];

    useEffect( () => {
        console.log('changing url')
        setURL(`https://api.open5e.com/monsters/?limit=${rowsPerPage}&page=${page}&${searchParams}`);
        setCount(data.count);
        //eslint-disable-next-line
    }, [rowsPerPage, page, searchParams, data]);
    console.log(data);
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TablePaginator 
                rowOptions={rowOptions} 
                useCount={[count, setCount]}
                useRows={[rowsPerPage, setRowsPerPage]}
                usePage={[page, setPage]}
            />
            <Table>
                <THead />
                <MonsterTable tableData={data.results} status={props.status}/>
            </Table>
        </Paper>
    )
}