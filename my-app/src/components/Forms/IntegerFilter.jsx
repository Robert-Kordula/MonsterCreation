import React from 'react';
import TextField from '@mui/material/TextField';

export default function IntegerFilter(props) {
    const [userFilters, setUserFilters] = props.userFilters;

    const label = props.label;

    const handleChange = (event) => {
        setUserFilters((prevState) => ({
            ...prevState,
            [label]: parseInt(event.target.value)
        }));
    }

    return (
        <TextField
            key={`filter-${label}`}
            label={label}
            type='number'
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) event.preventDefault();
            }}
            onChange={handleChange}
            value={userFilters[label] || (props.data? props.data[label] : '')}
        />
    )
}