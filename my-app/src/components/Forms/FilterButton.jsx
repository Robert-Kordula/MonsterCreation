import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { FilterDrawer } from './FilterDrawer';

export function FilterButton(props) {
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
            ><FilterDrawer searchParams={props.searchParams} /></Drawer>
        </div>
    )
}