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
        if (inputType === 'drop-downs') return (<DropDownFilter key={`accord-filter-${label}`} label={label} values={filter.values} userFilters={props.userFilters} />)
        else if (inputType === 'multi-drop-down') return (<MultiDropFilter key={`accord-filter-${label}`} label={label} values={filter.values} userFilters={props.userFilters} />)
        else if (inputType === 'integer') return (<IntegerFilter key={`accord-filter-${label}`} label={label} userFilters={props.userFilters} />);
        else if (inputType === 'string') return (<StringFilter key={`accord-filter-${label}`} label={label} userFilters={props.userFilters} />);
        else if (inputType === 'range') return (<RangeFilter key={`accord-filter-${label}`} label={label} min={filter.min} max={filter.max} userFilters={props.userFilters} />)
        else if (inputType === 'number-in-list') return (<ListLengthFilter key={`accord-filter-${label}`} label={label} min={filter.min} max={filter.max} userFilters={props.userFilters} />)
    };

    return (
        <AccordionDetails
            key={`accord-det-${props.label}`}
        >
            {filterLabels.map(determineFilter)}
        </AccordionDetails>
    )
}