import React, { useEffect, useState } from 'react';
import DynamicCell from './DynamicCell';

export default function DynamicRow(props) {
    const columns = props.columns;
    const index = props.index;
    const label = props.label;
    const [rows, setRows] = props.useRows;
    const [data, setData] = props.useData;
    const [row, setRow] = useState(rows[index]);

    useEffect(() => {
        setData((prevState) => ({
            ...prevState,
            [label]: rows
        }));
        //eslint-disable-next-line
    }, [rows])

    return columns.map((column) => (
                <DynamicCell
                    index={index} 
                    useRow={[row, setRow]}
                    useRows={[rows, setRows]}
                    useData={[data, setData]} 
                    header={column.header} 
                    type={column.value}
                    label={label}
                />));
}