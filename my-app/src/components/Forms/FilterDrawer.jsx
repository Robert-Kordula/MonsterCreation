import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button'
import PopulateAccordion from './PopulateAccordion'

/*Temporary hardcoding of filter types and values, when backend is complete will be sending
  details of all filters to client
*/
import TempFilters from '../../TempFilters';

export default function FilterDrawer(props) {

  const [expanded, setExpanded] = useState(false);
  const [userFilters, setUserFilters] = props.userFilters;
  const [,setSearchParams] = props.searchParams;

  const updateSearchFromFilter = () => {
    let params = new URLSearchParams();
    console.log(JSON.stringify(userFilters));
    for (const filter in userFilters) {
      params.append(filter, userFilters[filter]);
    }
    return params;
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const onApply = () => {
    console.log(JSON.stringify(userFilters));
    setSearchParams(updateSearchFromFilter());
  };

  const onReset = () => {
    setUserFilters({});
    setSearchParams(new URLSearchParams());
  };

  let sections = Object.keys(TempFilters());
  return (
    <Box sx={{
      width: 400
    }}
    >
      {sections.map((label) => {
        return (
          <Accordion
            expanded={expanded === label}
            onChange={handleChange(label)}
            key={`accordion-${label}`}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${label}bh-content`}
              id={`${label}bh-header`}
              key={`accord-sum-${label}`}
            >{label}
            </AccordionSummary>
            <PopulateAccordion
              filters={TempFilters()[label]}
              userFilters={props.userFilters}
              label={label}
            />
          </Accordion>
        )
      })}
      <div style={{ display: 'inline' }}>
        <Button
          onClick={onApply}
        >Apply</Button>
        <Button
          onClick={onReset}
        >Reset</Button>
      </div>
    </Box>
  )
}