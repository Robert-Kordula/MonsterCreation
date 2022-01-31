import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import React from 'react';
import Table from '@mui/material/Table';
import CustomTableHead from './CustomTableHead';
import DynamicTableBody from './DynamicTableBody';

export default function DynamicTable(props) {

    const label = props.label;

    return (
        <TableContainer componet={Paper}>
            <p><strong>{label}</strong></p>
            <Table>
                <CustomTableHead 
                    columns={props.columns} 
                    label={label}
                />
                <DynamicTableBody 
                    columns={props.columns} 
                    label={label} 
                    data={props.data}
                    isInitial={props.isInitial}
                    useNewData={props.useNewData}
                />
            </Table>
        </TableContainer>
    )
}