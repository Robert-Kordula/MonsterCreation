import '../App.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';

import TempFilters from '../TempFilters';
import BuildSection from './BuildSection';

export default function AttributeFields(props) {

    const { name } = useParams();
    const data = props.data || {};
    const [newData, setNewData] = useState({});
    const [isInitial, setIsInitial] = useState(true);
    const [changed, setChanged] = useState(false);
    const attributes = TempFilters();

    useEffect(() => {
        setIsInitial(false);
    }, []);

    useEffect(() => {
        console.log(data.actions);
        console.log(newData);
        if (!isInitial) {
            setChanged(true);
        }
        //eslint-disable-next-line
    }, [newData])

    const sendData = async () => {
        console.log(newData);
        const requestOptions = {
            method: props.method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sendData)
        };
        let url = 'http://localhost:3500/monster';
        if (props.method === 'PATCH') {
            url = url.concat(`/${name}`);
        }

        let response = await fetch(url, requestOptions);
        alert(response.status);
    };



    return (
        <Box>
            <header id='header-title'>{props.name || ''}</header>
            <TextField
                id='name'
                value={data.name}
                label='name'
            />
            <Box className='grid-container'>
                <Box
                    noValidate
                    autoComplete="off"
                    className='about-grid'
                >
                    <BuildSection 
                        attributes={attributes} 
                        label={"about"} 
                        useNewData={[newData, setNewData]}
                        data={data}
                    />
                </Box>
                <Box
                    noValidate
                    autoComplete="off"
                    className='stats-grid'
                >
                    <BuildSection 
                        attributes={attributes} 
                        label={"stats"}
                        useNewData={[newData, setNewData]}
                        data={data}
                    />
                </Box>
                <Box
                    noValidate
                    autoComplete="off"
                    className='saves-grid'
                >
                    <BuildSection 
                        attributes={attributes}
                        label={"saves and resistances"} 
                        useNewData={[newData, setNewData]}
                        data={data}
                    />
                </Box>
                <Box
                    noValidate
                    autoComplete="off"
                    className='skills-grid'
                >
                    <BuildSection 
                        attributes={attributes}
                        label={"actions and spells"} 
                        useNewData={[newData, setNewData]}
                        data={data}
                    />
                </Box>
            </Box>

            <Fab
                className='UpdateButton'
                variant='extended'
                size='medium'
                id='UpdateButton'
                onClick={sendData}
                disabled={!changed}
            >SAVE CHANGES</Fab>
        </Box>
    )
}