import React, { useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import DynamicRow from './DynamicRow';

export default function DynamicTableBody(props) {
    const label = props.label;
    const data = props.data;
    const [rows, setRows] = useState(data[label] || []);

    const addNewRow = () => {
        setRows([...rows, {}]);
    }

    const deleteRow = (index) => {
        console.log('DELETING');
        console.log(rows.length);
        let tempRows = [...rows];
        console.log(tempRows.splice(index, 1));
        console.log(tempRows.length);
        console.log(tempRows);
        setRows([...tempRows]);
    }

    return (
        <TableBody>
            {
                rows.map((row, index) => {
                    return (
                        <TableRow>
                            <DynamicRow
                                columns={props.columns}
                                useRows={[rows, setRows]}
                                data={data}
                                label={label}
                                index={index}
                                isInitial={props.isInitial}
                                useNewData={props.useNewData}
                            />
                            <TableCell>
                                <Button 
                                    className='Buttons'
                                    onClick={() => deleteRow(index)}
                                >DELETE</Button>
                            </TableCell>
                        </TableRow>)
                })
            }
            <TableRow><TableCell>
                <Button
                    className='Buttons'
                    onClick={addNewRow}
                >ADD NEW ROW
                </Button>
            </TableCell></TableRow>
        </TableBody>
    )
}