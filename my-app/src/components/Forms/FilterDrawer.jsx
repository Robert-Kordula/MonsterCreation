import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button'
import { PopulateAccordion } from './PopulateAccordion'

/*Temporary hardcoding of filter types and values, when backend is complete will be sending
  details of all filters to client
*/
const ALL_FILTERS = {
  'about': {
    'size': {
      inputType: 'drop-downs',
      values: ['Small', 'Medium', 'Large', 'Huge']
    },
    'type': {
      inputType: 'drop-downs',
      values: ['celestial', 'dragon', 'aberration', 'undead', 'fey']
    },
    'group': {
      inputType: 'drop-downs',
      values: ['N/A', 'Elementals', 'Sphinxes', 'Animated Objects']
    },
    'alignment': {
      inputType: 'drop-downs',
      values: ['lawful good', 'neutral good', 'chaotic good', 'lawful neutral', 'unaligned', 'chaotic neutral', 'lawful evil', 'neutral evil', 'chaotic evil']
    },
    'languages': {
      inputType: 'multi-drop-down',
      values: ['Common', 'Gnoll', 'Sylvan', 'Draconic']
    },
    'challengeRating': {
      inputType: 'integer'
    }
  },
  'stats': {
    'armorClass': {
      inputType: 'integer'
    },
    'armourDescription': {
      inputType: 'string'
    },
    'hitPoints': {
      inputType: 'integer'
    },
    'hitDice': {
      inputType: ''
    },
    'strength': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'dexterity': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'constitution': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'intelligence': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'wisdom': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'charisma': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'perception': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'senses': {
      inputType: 'string'
    }
  },
  'speeds': {
    'walk': {
      inputType: 'integer'
    },
    'climb': {
      inputType: 'integer'
    },
    'burrow': {
      inputType: 'integer'
    },
    'swim': {
      inputType: 'integer'
    },
    'fly': {
      inputType: 'integer'
    }
  },
  'saves and resistances': {
    'strengthSave': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'dexteritySave': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'constitutionSave': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'intelligenceSave': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'wisdomSave': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'charismaSave': {
      inputType: 'range',
      min: 0,
      max: 100
    },
    'damageVulnerabilites': {
      inputType: 'drop-downs',
      values: ['radiant', 'cold', 'fire', 'bludgeoning']
    },
    'damageResistances': {
      inputType: 'drop-downs',
      values: ['radiant', 'cold', 'fire', 'bludgeoning']
    },
    'damageImmunities': {
      inputType: 'drop-downs',
      values: ['radiant', 'cold', 'fire', 'bludgeoning']
    },
    'conditionImmunities': {
      inputType: 'drop-downs',
      values: ['paralyzed', 'unconscious', 'charmed', 'poisoned']
    }
  },
  'actions and spells': {

  }
};

export function FilterDrawer(props) {

  const [expanded, setExpanded] = useState(false);
  const [userFilters, setUserFilters] = useState({});
  const [searchParams, setSearchParams] = props.searchParams;

  const updateFiltersFromSearch = () => {
    const iterator = searchParams.entries();
    let isDone = false;
    while (!isDone) {
      const {value, done} = iterator.next();
      isDone = done;
      if (!value) break;
      setUserFilters((prevState) => ({
        ...prevState,
        [value[0]]: value[1]
      }))
    }
  };

  const updateSearchFromFilter = () => {
    let params = new URLSearchParams();
    console.log(JSON.stringify(userFilters));
    for (const filter in userFilters) {
      console.log(`${filter}, ${userFilters[filter]}`);
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

  useEffect(() => {
    updateFiltersFromSearch();
    // eslint-disable-next-line
  }, []);

  let sections = Object.keys(ALL_FILTERS);
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
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${label}bh-content`}
              id={`${label}bh-header`}
            >{label}
            </AccordionSummary>
            <PopulateAccordion
              filters={ALL_FILTERS[label]}
              userFilters={[userFilters, setUserFilters]}
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