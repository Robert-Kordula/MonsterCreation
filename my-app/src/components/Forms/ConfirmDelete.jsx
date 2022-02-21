import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

export default function ConfirmDelete(params) {
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