import React from 'react';
import TextField from '@mui/material/TextField';

export function StringFilter(props) {
    const [userFilters, setUserFilters] = props.userFilters;

    const label = props.label;

    const handleChange = (event) => {
        setUserFilters((prevState) => ({
            ...prevState,
            [label]: event.target.value
        }));
    }


    return (
        <TextField
            key={`filter-${label}`}
            label={label}
            onChange={handleChange}
            value={userFilters[label] ?? ''}
        />
    )
}