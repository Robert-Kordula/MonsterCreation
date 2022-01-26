import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import FilterDrawer from './FilterDrawer';

export default function FilterButton(props) {
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
                hideBackdrop={false}
            ><FilterDrawer searchParams={props.searchParams} userFilters={props.userFilters} /></Drawer>
        </div>
    )
}