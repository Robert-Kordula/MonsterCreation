import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ConfirmDelete from '../ConfirmDelete';

export default function TBody(props) {
    let data = props.tableData;
    return (
        <TableBody>
            {data?.length > 0 && data.map((monster) => (
                <TableRow
                    className='Monster-Row'
                    key={monster.slug}
                >
                    <TableCell>
                        <strong>{monster.name}</strong>
                    </TableCell>
                    <TableCell>{monster.type}</TableCell>
                    <TableCell>{monster.size}</TableCell>
                    <TableCell>{monster.hit_points}</TableCell>
                    <TableCell>{monster.challenge_rating}</TableCell>
                    <TableCell>
                        <Button
                            className='Buttons'
                            component={Link}
                            to={`/edit/${monster.slug}`}
                        >EDIT</Button>
                    </TableCell>
                    <TableCell>
                        <ConfirmDelete
                            slug={monster.slug}
                            name={monster.name}
                        />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}