import './App.css';
import React from 'react';
import { useState } from 'react';
import useFetchData from './useFetchData.jsx';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Table, TableBody, TableCell, TableContainer, TablePagination, TableHead, TableRow, Paper, Button, TextField, ToggleButtonGroup, ToggleButton, Drawer, Accordion, AccordionSummary, AccordionDetails, Autocomplete, Checkbox, Input } from '@mui/material';
import { Box } from '@mui/system';


/*Temporary hardcoding of filter types and values, when backend is complete will be sending
  details of all filters to client
*/

const FILTERS = {
  About: {
    Size: {
      InputType: 'drop-downs',
      Values: ['Small', 'Medium', 'Large', 'Huge']
    },
    Type: {
      InputType: 'drop-downs',
      Values: ['celestial', 'dragon', 'aberration', 'undead', 'fey']
    },
    Languages: {
      InputType: 'multi-drop-down',
      Values: ['Common', 'Gnoll', 'Sylvan', 'Draconic']
    },
    Challenge_Rating: {
      InputType: 'integer'
    }
  },

  Stats: {

  },
  Speeds: {

  },
  Saves: {

  },
  Actions: [
    {
      Actions: {
        InputType: 'range',
        minValue: 0,
        maxValue: 10
      }
    }
  ]
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
  return (
    <Box
    >
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >About Monster</AccordionSummary>
        <AccordionDetails><FilterAbout /></AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >Monster Stats</AccordionSummary>
        <AccordionDetails
        ></AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >Monster Speeds</AccordionSummary>
        <AccordionDetails
        ></AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >Monster Saves/Resistances</AccordionSummary>
        <AccordionDetails
        ></AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >Monster Actions/Spells</AccordionSummary>
        <AccordionDetails
        ></AccordionDetails>
      </Accordion>
      <div style={{ display: 'inline' }}>
        <Button>Apply</Button>
        <Button>Reset</Button>
      </div>
    </Box>
  )
}

function FilterAbout() {


  return (
    <Box
    >
      <DropDownFilter label='Size' values={FILTERS.About.Size.Values} />
      <MultiDropFilter label='Languages' values={FILTERS.About.Languages.Values} />
      <IntegerFilter label='Challenge Rating' />
    </Box>
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