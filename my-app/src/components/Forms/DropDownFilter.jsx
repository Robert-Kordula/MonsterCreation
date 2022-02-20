import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function DropDownFilter(props) {
    const [userFilters, setUserFilters] = props.userFilters;

    const label = props.label;
    const acceptedValues = props.values;

    const handleChange = (event, newValue) => {
        setUserFilters((prevState) => ({
            ...prevState,
            [label]: newValue
            //[label]: acceptedValues.indexOf(newValue)
        }));
    }

    return (
        <Autocomplete
            key={`filter-${label}`}
            options={[...acceptedValues]}
            renderInput={(params) => <TextField {...params} label={label} />}
            onChange={handleChange}
            //value={acceptedValues[getValue] || null}
            value={userFilters[label] || null}
        />
    )
}