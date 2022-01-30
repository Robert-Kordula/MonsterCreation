import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function CustomTableHead(props) {
    const columns = props.columns;
    return (
        <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={`${props.label}-${column.header}`}
                        padding='none'
                    >
                        {column.header}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}