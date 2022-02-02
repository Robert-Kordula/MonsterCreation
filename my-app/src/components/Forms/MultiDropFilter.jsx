import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

export default function MultiDropFilter(props) {
    const [userFilters, setUserFilters] = props.userFilters;

    const label = props.label;
    const acceptedValues = props.values;

    const handleChange = (event, newValue) => {
        setUserFilters((prevState) => ({
            ...prevState,
            [label]: newValue
        }));
    };
    console.log(acceptedValues);
    return (
        <Autocomplete
            multiple
            key={`filter-${label}`}
            options={acceptedValues}
            disableCloseOnSelect
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        checked={selected}
                    />
                    {option}
                </li>
            )}
            onChange={handleChange}
            value={userFilters[label] || (props.data? [props.data[label]] : [])}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    )
}