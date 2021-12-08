import './App.css';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button, TextField, Fab, Box } from '@mui/material';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import useFetchData from './useFetchData';

function EditMonster(props) {

    const attributeList = ['name', 'img_main', 'size', 'type', 'subtype', 'group', 'alignment', 'armor_class', 'armor_desc', 'hit_points', 'hit_dice', 'speed', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma', 'strength_save', 'dexterity_save', 'constitution_save', 'intelligence_save', 'wisdom_save', 'charisma_save', 'perception', 'skills', 'damage_vulnerabilities', 'damage_resistances', 'damage_immunities', 'condition_immunities', 'senses', 'languages', 'challenge_rating', 'actions', 'reactions', 'legendary_desc', 'special_abilities', 'spell_list', 'document__slug', 'document__title', 'document__license_url'];
    const [monsterData, setMonsterData] = useState({});
    
    let {slug} = useParams();
    console.log(slug);

    const postMonster = async (sendMethod) => {
        setMonsterData(attributeList.reduce((data, attribute) => {
            data[attribute] = document.getElementById(attribute).value
            return data;
        }, {}));
        console.log(monsterData);
        const requestOptions = {
            method: sendMethod,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(monsterData)
        };

        let response = await fetch('http://localhost:3500/monster', requestOptions);
        alert(response.status);
    };

    useEffect(() => {
        if (slug) {

        }
    }, [slug]);

    return (
        <div>
            <header id='header-title'>{props.name || ''}</header>
            <TextField
                    id='slug'
                    defaultValue={slug || ''}
                    label='slug'
                    type='search'
                    disabled
                />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                {attributeList.map((attribute) => (
                    <Attribute name={attribute} />
                ))}
            </Box>
            <Fab 
                className='Buttons UpdateButton' 
                variant='extended' 
                size='medium' 
                id='UpdateButton'
                onClick={postMonster}>
                    SAVE CHANGES</Fab>
        </div>
    )
}

function FindMonster(slug) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        setData(useFetchData())
    });
    return {data};
}

function Attribute(params) {
    return (
        <TextField
            id={params.name}
            label={params.name}
            defaultValue='N/A'
            variant="filled"
        />
    )
}

export default EditMonster;