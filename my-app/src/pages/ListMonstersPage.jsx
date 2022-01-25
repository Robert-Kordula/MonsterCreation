import '../App.css';
import React, { useEffect, useState } from 'react';
import { FilterButton } from '../components/Forms/FilterButton';
import { FetchTable } from '../components/Tables/FetchTable';
import { LiveSearchBar } from '../components/Forms/LiveSearchBar'
import useFetchData from '../useFetchData.jsx';
import { Link, useSearchParams } from 'react-router-dom';
import { Button, ToggleButtonGroup, ToggleButton } from '@mui/material';

function ListMonstersPage(props) {
  const { data } = useFetchData('http://localhost:3500/monster');
  const [searchParams, setSearchParams] = useSearchParams();
  const [userFilters, setUserFilters] = useState({});

  const updateFiltersFromSearch = () => {
    const iterator = searchParams.entries();
    let isDone = false;
    while (!isDone) {
      let {value, done} = iterator.next();
      isDone = done;
      if (!value) break;
      if (value[1].includes(',')) {
        let str = value[1].split(',');
        value[1] = [];
        console.log(value[1]);
        for (const number of str) {
          value[1].push(parseInt(number));
        }
      }
      setUserFilters((prevState) => ({
        ...prevState,
        [value[0]]: value[1]
      }))
    }
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
          <LiveSearchBar label='name' searchParams={[searchParams, setSearchParams]} userFilters={[userFilters, setUserFilters]} />
        </div>
        <div style={{ display: 'inline' }}>
          <FilterButton searchParams={[searchParams, setSearchParams]} userFilters={[userFilters, setUserFilters]} />
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