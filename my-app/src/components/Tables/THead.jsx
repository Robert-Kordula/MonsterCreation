import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

export function THead() {
    return (
        <TableHead>
            <TableRow>
                <TableHeader name='Name' />
                <TableHeader name='Type' />
                <TableHeader name='Size' />
                <TableHeader name='HP' />
                <TableHeader name='CR' />
                <TableHeader name='' />
                <TableHeader name='' />
            </TableRow>
        </TableHead>
    )
}

function TableHeader(params) {
    return (
        <TableCell>
            <strong style={{ color: 'white' }}>{params.name}</strong>
            <Button className='Buttons'>SORT</Button>
        </TableCell>
    );
}