import React, { useState, useEffect } from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

function DynamicRow(props) {
    const columns = props.columns;
    const index = props.index;
    const label = props.label;
    const [rows, setRows] = props.useRows;
    const [, setNewData] = props.useNewData;
    const [row, setRow] = useState(rows[index]);

    useEffect(() => {
        if (!props.isInitial) {
            console.log('edit table');
            setNewData((prevState) => ({
                ...prevState,
                [label]: rows
            }))
        }
        //eslint-disable-next-line
    }, [rows])

    return columns.map((column) => (
                <DynamicCell
                    index={index} 
                    useRow={[row, setRow]}
                    useRows={[rows, setRows]}
                    header={column.header} 
                    type={column.value}
                    label={label}
                    isInitial={props.isInitial}
                />));
}

function DynamicCell(props) {
    
    const [rows, setRows] = props.useRows;
    const [row, setRow] = props.useRow;
    const index = props.index;
    const header = props.header;

    useEffect(() => {
        if (!props.isInitial) {
            let tempRows = [...rows];
            tempRows.splice(index, 1, row);
            setRows(tempRows);
        }
        //eslint-disable-next-line
    }, [row])

    const handleChange = (event) => {
        setRow((prevState) => ({
            ...prevState,
            [header]: event.target.value
        }));
    }

    return (
        <TableCell>
            <TextField
                value={row[header] || ''}
                onChange={handleChange}
            />
        </TableCell>
    )
}