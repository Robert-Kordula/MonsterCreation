import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import THead from './THead'
import TablePaginator from './TablePaginator';
import TBody from './TBody';

export default function FetchTable(props) {
    let data = props.data;

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TablePaginator />
            <Table
                className='Sarch-Body'>
                <THead />
                <TBody tableData={data} />
            </Table>
        </Paper>
    )
}