import './App.css';
import React from 'react';
import { useState } from 'react';
import useFetchData from './useFetchData.jsx';
import { Link } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function ListMonstersPage() {
  const { data } = useFetchData('http://localhost:3500/monster');

  return (
    <div className='App'>
      <header>
        <p style={{ display: 'grid' }}>List Of Monsters</p>
      </header>
      {data?.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader name='Name' />
                <TableHeader name='Type' />
                <TableHeader name='Size' />
                <TableHeader name='HP' />
                <TableHeader name='CR' />
                <TableCell colSpan={2}>
                  <Button
                    className='Buttons'
                    component={Link}
                    to='/add'
                  >Add New Monster</Button>
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
      )}
    </div>
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