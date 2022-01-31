import '../App.css';
import React, { useEffect, useState } from 'react';
import FilterButton from '../components/Forms/FilterButton';
import FetchQuery from '../components/FetchQuery';
import FetchTable from '../components/Tables/FetchTable';
import LiveSearchBar from '../components/Forms/LiveSearchBar';
import { Link, useSearchParams } from 'react-router-dom';
import { Button, ToggleButtonGroup, ToggleButton } from '@mui/material';

const URL = 'http://localhost:3500/monster';

export default function ListMonstersPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userFilters, setUserFilters] = useState({});

  const updateFiltersFromSearch = () => {
    const iterator = searchParams.entries();
    let isDone;
    do {
      const {value, done} = iterator.next();
      isDone = done;
      let [key, query] = value || [];
      
      if (!value) break;
      if (query.includes(',')) {
        query = [...query.split(',')];
      }
      setUserFilters((prevState) => ({...prevState, [key]: query}))
    } while (!isDone);
  };

  useEffect(() => {
    updateFiltersFromSearch();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='App'>
      <header>
        <div className='Search-Header'>
          <p style={{ display: 'grid' }}>List Of Monsters</p>
          <LiveSearchBar label='name' searchParams={[searchParams, setSearchParams]} userFilters={[userFilters, setUserFilters]}/>
        </div>
        <div style={{ display: 'inline' }}>
          <FilterButton searchParams={[searchParams, setSearchParams]} userFilters={[userFilters, setUserFilters]}/>
          <Button
            className='Buttons'
            component={Link}
            to='/add'
          >Add New Monster</Button>
          <ViewToggleButton />
        </div>
      </header>
      <FetchQuery 
        userComponent={FetchTable}
        url={URL}
      />
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