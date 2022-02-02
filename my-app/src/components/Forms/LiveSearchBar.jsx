import React from 'react';
import TextField from '@mui/material/TextField';

export default function LiveSearchBar(props) {
    const [userFilters, setUserFilters] = props.userFilters;
    const [searchParams, setSearchParams] = props.searchParams;
    const label = props.label;

    const handleChange = (event) => {
        setUserFilters((prevState) => ({
            ...prevState,
            [label]: event.target.value
        }));
        let params = searchParams;
        params.set(label, event.target.value);
        setSearchParams(params);
    }

    return (
        <TextField
            id="outlined-search"
            label="Search Monster Name"
            value={userFilters[label] || ''}
            onChange={handleChange}
        />
    )
}