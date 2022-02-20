import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function ListLengthFilter(props) {
    const [userFilters, setUserFilters] = props.userFilters;

    const label = props.label;
    const min = props.min;
    const max = props.max;


    const handleChange = (event, newValue) => {
        setUserFilters((prevState) => ({
            ...prevState,
            [label]: newValue
        }));
    }
    return (
        <Box
        >
            <Typography>{label}</Typography>
            <Slider
                key={`filter-${label}`}
                valueLabelDisplay='auto'
                value={userFilters[label] ||  [min, max]}
                onChange={handleChange}
                min={min}
                max={max}
                disableSwap
            />
        </Box>
    )
}