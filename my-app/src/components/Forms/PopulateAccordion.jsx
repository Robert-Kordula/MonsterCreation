import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import { DropDownFilter } from './DropDownFilter';
import { MultiDropFilter } from './MultiDropFilter';
import { IntegerFilter } from './IntegerFilter';
import { StringFilter } from './StringFilter';
import { RangeFilter } from './RangeFilter';
import { ListLengthFilter } from './ListLengthFilter';

export function PopulateAccordion(props) {
    let filters = props.filters;
    let filterLabels = Object.keys(filters);

    const determineFilter = (label) => {
        let filter = filters[label];
        let inputType = filter.inputType;
        if (inputType === 'drop-downs') return (<DropDownFilter label={label} values={filter.values} userFilters={props.userFilters} />)
        else if (inputType === 'multi-drop-down') return (<MultiDropFilter label={label} values={filter.values} userFilters={props.userFilters} />)
        else if (inputType === 'integer') return (<IntegerFilter label={label} userFilters={props.userFilters} />);
        else if (inputType === 'string') return (<StringFilter label={label} userFilters={props.userFilters} />);
        else if (inputType === 'range') return (<RangeFilter label={label} min={filter.min} max={filter.max} userFilters={props.userFilters} />)
        else if (inputType === 'number-in-list') return (<ListLengthFilter label={label} min={filter.min} max={filter.max} userFilters={props.userFilters} />)
    };

    return (
        <AccordionDetails
        >
            {filterLabels.map(determineFilter)}
        </AccordionDetails>
    )
}