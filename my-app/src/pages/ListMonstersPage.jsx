import '../App.css';
import React from 'react';
import { FilterButton } from '../components/Forms/FilterButton';
import { FetchTable } from '../components/Tables/FetchTable';
import useFetchData from '../useFetchData.jsx';
import { Link, useSearchParams } from 'react-router-dom';
import { Button, TextField, ToggleButtonGroup, ToggleButton } from '@mui/material';

function ListMonstersPage(props) {
  const { data } = useFetchData('http://localhost:3500/monster');
  const [searchParams, setSearchParams] = useSearchParams();

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
          <FilterButton searchParams={[searchParams, setSearchParams]} />
          <Button
            className='Buttons'
            component={Link}
            to='/add'
          >Add New Monster</Button>
          <ViewToggleButton />
        </div>
      </header>
      <FetchTable tableData={data} />
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

export default ListMonstersPage;