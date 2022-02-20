import React, { useEffect, useState } from 'react';
import DynamicCell from './DynamicCell';

export default function DynamicRow(props) {
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