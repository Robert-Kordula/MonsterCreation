import './App.css';
import React from 'react';
import { useState } from 'react';
import useFetchData from './useFetchData.jsx';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Table, TableBody, TableCell, TableContainer, TablePagination, TableHead, TableRow, Paper, Button, TextField, ToggleButtonGroup, ToggleButton, Drawer, Accordion, AccordionSummary, AccordionDetails, Autocomplete, Checkbox, Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';


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

function ListMonstersPage() {
  const { data } = useFetchData('http://localhost:3500/monster');

  return (
    <div className='App'>
      <header>
        <div className='Search-Header'>
          <p style={{ display: 'grid' }}>List Of Monsters</p>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
          />
        </div>
        <div style={{ display: 'inline' }}>
          <FilterButton />
          <Button
            className='Buttons'
            component={Link}
            to='/add'
          >Add New Monster</Button>
          <ViewToggleButton />
        </div>
      </header>
      {data?.length > 0 && (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TablePaginator />
          <TableContainer>
            <Table
              className='Sarch-Body'>
              <TableHead>
                <TableRow>
                  <TableHeader name='Name' />
                  <TableHeader name='Type' />
                  <TableHeader name='Size' />
                  <TableHeader name='HP' />
                  <TableHeader name='CR' />
                  <TableCell colSpan={2}>

                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((monster) => (
                  <TableRow
                    className='Monster-Row'
                    key={monster.slug}
                  >
                    <TableCell>
                      <strong>{monster.name}</strong>
                    </TableCell>
                    <TableCell>{monster.type}</TableCell>
                    <TableCell>{monster.size}</TableCell>
                    <TableCell>{monster.hit_points}</TableCell>
                    <TableCell>{monster.challenge_rating}</TableCell>
                    <TableCell>
                      <Button
                        className='Buttons'
                        component={Link}
                        to={`/edit/${monster.slug}`}
                      >EDIT</Button>
                    </TableCell>
                    <TableCell>
                      <ConfirmDelete
                        slug={monster.slug}
                        name={monster.name}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </div>
  );
}

function ViewToggleButton() {

  const [alignment, setAlignment] = React.useState('list');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color='primary'
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value='list'>List</ToggleButton>
      <ToggleButton value='grid'>Grid</ToggleButton>
    </ToggleButtonGroup>
  );
}

function FilterButton() {
  const [state, setState] = useState(false);

  const openDrawer = () => {
    setState(true);
  }

  const closeDrawer = () => {
    setState(false);
  }

  return (
    <div>
      <Button
        onClick={openDrawer}
      >Filters</Button>
      <Drawer
        anchor={'left'}
        open={state}
        onClose={closeDrawer}
        hideBackdrop={true}
      ><FilterDrawer /></Drawer>
    </div>
  )
}

function FilterDrawer() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  let sections = Object.keys(ALL_FILTERS);

  return (
    <Box
    >
      {sections.map((label)=> {
        return (
          <Accordion
          expanded={expanded === label}
          onChange={handleChange(label)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${label}bh-content`}
            id={`${label}bh-header`}
          >{label}</AccordionSummary>
          <PopulateFilters filters={ALL_FILTERS[label]}/>
        </Accordion>
        )
      })}
      <div style={{ display: 'inline' }}>
        <Button>Apply</Button>
        <Button>Reset</Button>
      </div>
    </Box>
  )
}

function PopulateFilters(props) {  
  let filters = props.filters;
  let filterLabels = Object.keys(filters);

  const determineFilter = (label) => {
    let filter = filters[label];
    let inputType = filter.inputType;
    if (inputType === 'drop-downs') return (<DropDownFilter label={label} values={filter.values}/>)
    else if (inputType === 'multi-drop-down') return (<MultiDropFilter label={label} values={filter.values}/>)
    else if (inputType === 'integer') return (<IntegerFilter label={label} />);
    else if (inputType === 'string') return (<StringFilter label={label} />);
    else if (inputType === 'range') return (<RangeFilter label={label} min={filter.min} max={filter.max}/>)
    else if (inputType === 'number-in-list') return (<ListLengthFilter label={label} min={filter.min} max={filter.max}/>)
  };

  return (
    <AccordionDetails
    >
      {filterLabels.map(determineFilter)}
    </AccordionDetails>
  )
}

function DropDownFilter(props) {
  let label = props.label;
  let values = props.values;

  return (
    <Autocomplete
      id={`filter-${label}`}
      options={values}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  )
}

function MultiDropFilter(props) {
  let label = props.label;
  let values = props.values;

  return (
    <Autocomplete
      multiple
      id={`filter-${label}`}
      options={values}
      disableCloseOnSelect
      renderOption={(props, option, {selected}) => (
        <li {...props}>
          <Checkbox
            checked={selected}
          />
          {option}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  )
}

function IntegerFilter(props) {
  let label = props.label;

  return (
    <TextField
      id={`filter-${label}`}
      label={label}
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) event.preventDefault();
      }}
    />
  )
}

function StringFilter(props) {
  let label = props.label;

  return (
    <TextField
      id={`filter-${label}`}
      label={label}
    />
  )
}

function RangeFilter(props) {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  
  let label = props.label;
  let min = props.min;
  let max = props.max;

  return (
    <Box
    >
      <Typography>{label}</Typography>
      <Slider
        id={`filter-${label}`}
        valueLabelDisplay='auto'
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        disableSwap
      />
    </Box>
  )
}

function ListLengthFilter(props) {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  
  let label = props.label;
  let min = props.min;
  let max = props.max;

  return (
    <Box
    >
      <Typography>{label}</Typography>
      <Slider
        id={`filter-${label}`}
        valueLabelDisplay='auto'
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        disableSwap
      />
    </Box>
  )
}

function TablePaginator() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 100, 1086]}
      component="div"
      count={1}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

function ConfirmDelete(params) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (slug) => {
    const requestOptions = {
      method: 'DELETE',
    };
    let res = await fetch(`http://localhost:3500/monster/${slug}`, requestOptions);
    if (res.status === 200) {
      alert(`${params.name} has been removed from the database`);
      window.location.reload(false);
    } else if (res.status === 100) {
      alert('Error this monster no longer exists');
    }
    setOpen(false);

  };

  return (
    <div>
      <Button
        className='Buttons'
        onClick={handleClickOpen}
      >
        DELETE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {`Are you sure you want to delete ${params.name}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {`Deleting ${params.name} will be permanent you cannot undo this action`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Cancel</Button>
          <Button onClick={() => handleDelete(params.slug)}>DELETE</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

function TableHeader(params) {
  return (
    <TableCell>
      <strong style={{ color: 'white' }}>{params.name}</strong>
      <Button className='Buttons'>SORT</Button>
    </TableCell>
  );
}

export default ListMonstersPage;