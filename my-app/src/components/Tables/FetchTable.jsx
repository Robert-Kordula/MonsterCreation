import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import THead from './THead'
import TablePaginator from './TablePaginator';
import MonsterTable from './MonsterTable';

export default function FetchTable(props) {
    console.log(props);
    const [rowsPerPage, setRowsPerPage] = useState(50);
    const [page, setPage] = useState(1);
    const [searchParams, ]= props.useSearchParams
    const [,setURL] = props.useURL;
    const data = props.data;
    const dataLength = data.count;
    const rowOptions = [50, 100, 200];
    let start = 0;
    let end = start + parseInt(rowsPerPage);

    useEffect( () => {
        setURL(`https://api.open5e.com/monsters/?limit=${rowsPerPage}&page=${page}&${searchParams}`);
        //eslint-disable-next-line
    }, [rowsPerPage, page, searchParams])
    console.log(data.results.length);
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TablePaginator 
                rowOptions={rowOptions} 
                start={start} 
                end={end} 
                dataLength={dataLength}
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