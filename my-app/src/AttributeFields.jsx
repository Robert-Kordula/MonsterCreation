import './App.css';
import { TextField, Fab, Box } from '@mui/material';
import { useParams } from 'react-router';

let monsterData;

function AttributeFields(props) {

    const attributeList = ['name', 'img_main', 'size', 'type', 'subtype', 'group', 'alignment', 'armor_class', 'armor_desc', 'hit_points', 'hit_dice', 'speed', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma', 'strength_save', 'dexterity_save', 'constitution_save', 'intelligence_save', 'wisdom_save', 'charisma_save', 'perception', 'skills', 'damage_vulnerabilities', 'damage_resistances', 'damage_immunities', 'condition_immunities', 'senses', 'languages', 'challenge_rating', 'actions', 'reactions', 'legendary_desc', 'special_abilities', 'spell_list', 'document__slug', 'document__title', 'document__license_url'];
    const { slug } = useParams();
    console.log(slug);
    monsterData = props.monster || {};

    const sendMonster = async () => {
        let sendData = attributeList.reduce((data, attribute) => {
            data[attribute] = document.getElementById(attribute).value
            return data;
        }, {});
        console.log(sendData);
        const requestOptions = {
            method: props.method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sendData)
        };
        let url = 'http://localhost:3500/monster';
        if (props.method === 'PATCH') {
            url = url.concat(`/${slug}`);
        } 
        
        let response = await fetch(url, requestOptions);
        alert(response.status);    
    };

    return (
        <div>
            <header id='header-title'>{props.name || ''}</header>
            <TextField
                    id='slug'
                    defaultValue={slug}
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
                    <Attribute key={attribute} name={attribute} />
                ))}
            </Box>
            <Fab 
                className='Buttons UpdateButton' 
                variant='extended' 
                size='medium' 
                id='UpdateButton'
                onClick={sendMonster}>
                    SAVE CHANGES</Fab>
        </div>
    )
}

function Attribute(params) {
    return (
        <TextField
            id={params.name}
            label={params.name}
            defaultValue= {monsterData[params.name] || 'N/A'}
            variant="filled"
        />
    )
}

export default AttributeFields;