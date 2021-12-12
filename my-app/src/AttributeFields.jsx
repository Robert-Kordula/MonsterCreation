import './App.css';
import React from 'react';
import { TextField, Fab, Paper, Button, Box, List, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { useParams } from 'react-router';

let monsterData;

function AttributeFields(props) {

    const aboutAttributes = [
        {
            'name': {
                value: 'string',
                required: true
            }
        },
        {
            'img_main': {
                value: 'image'
            }
        },
        {
            'size': {
                value: 'string',
                required: true
            }
        },
        {
            'type': {
                value: 'string',
                required: true
            }
        },
        {
            'subtype': {
                value: 'string'
            }
        },
        {
            'group': {
                value: 'string',
                required: true
            }
        },
        {
            'alignment': {
                value: 'string',
                required: true
            }
        },
        {
            'languages': {
                value: 'list',
                list: {

                },
                required: true
            }
        },
        {
            'challenge_rating': {
                value: 'integer',
                required: true
            }
        },
        {
            'document__slug': {
                value: 'string'
            }
        },
        {
            'document__title': {
                value: 'string'
            }
        },
        {
            'document__license_url': {
                value: 'string'
            }
        }
    ];
    const statsAttributes = [
        {
            'armor_class': {
                value: 'integer'
            }
        },
        {
            'armor_desc': {
                value: 'string'
            }
        },
        {
            'hit_points': {
                value: 'integer'
            }
        },
        {
            'hit_dice': {
                value: 'string'
            }
        },
        {
            'speed': {
                value: 'string'
            }
        },
        {
            'strength': {
                value: 'integer'
            }
        },
        {
            'dexterity': {
                value: 'integer'
            }
        },
        {
            'constitution': {
                value: 'integer'
            }
        },
        {
            'intelligence': {
                value: 'integer'
            }
        },
        {
            'wisdom': {
                value: 'integer'
            }
        },
        {
            'charisma': {
                value: 'integer'
            }
        },
        {
            'perception': {
                value: 'integer'
            }
        },
        {
            'senses': {
                value: 'integer'
            }
        }
    ];
    const savesAttributes = [
        {
            'strength_save': {
                value: 'integer'
            }
        },
        {
            'dexterity_save': {
                value: 'integer'
            }
        },
        {
            'constitution_save': {
                value: 'integer'
            }
        },
        {
            'intelligence_save': {
                value: 'integer'
            }
        },
        {
            'wisdom_save': {
                value: 'integer'
            }
        },
        {
            'charisma_save': {
                value: 'integer'
            }
        },
        {
            'damage_vulnerabilities': {
                value: 'string'
            }
        },
        {
            'damage_resistances': {
                value: 'string'
            }
        },
        {
            'damage_immunities': {
                value: 'string'
            }
        },
        {
            'condition_immunities': {
                value: 'string'
            }
        }
    ];
    const skillsAttributes = [
        {
            'skills': {
                value: 'list',
            }
        },
        {
            'actions': {
                value: 'table',
                table: [
                    {
                        header: 'name',
                        value: 'string',
                        required: true
                    },
                    {
                        header: 'desc',
                        value: 'string',
                        required: true
                    },
                    {
                        header: 'attack_bonus',
                        value: 'integer'
                    },
                    {
                        header: 'damage_dice',
                        value: 'string'
                    }, 
                    {
                        header: 'damage_bonus',
                        value: 'integer'
                    }
                ]
            }
        },
        {
            'reactions': {
                value: 'list'
            }
        },
        {
            'legendary_desc': {
                value: 'list'
            }
        },
        {
            'legendary_actions': {
                value: 'table',
                table: [
                    {
                        header: 'name',
                        value: 'string',
                        required: true
                    },
                    {
                        header: 'desc',
                        value: 'string',
                        required: true
                    }
                ]
            }
        },
        {
            'special_abilities': {
                value: 'table',
                table: [
                    {
                        header: 'name',
                        value: 'string',
                        required: true
                    },
                    {
                        header: 'desc',
                        value: 'string',
                        required: true
                    }
                ]
            }
        },
        {
            'spell_list': {
                value: 'list'
            }
        }
    ];
    const attributeList = [];
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

    const buildField = (attribute) => {
        let label = Object.keys(attribute)[0];
        return <Attribute key={label} name={label} attribute={attribute} />;
    };

    return (
        <div>
            <header id='header-title'>{props.name || ''}</header>
            <TextField
                id='slug'
                defaultValue={slug}
                label='slug'
                disabled
            />
            <Box className = 'grid-container'>
                <Box
                    noValidate
                    autoComplete="off"
                    className = 'about-grid'
                >
                    {aboutAttributes.map(buildField)}
                </Box>
                <Box
                    noValidate
                    autoComplete="off"
                    className = 'stats-grid'
                >
                    {statsAttributes.map(buildField)}
                </Box>
                <Box
                    noValidate
                    autoComplete="off"
                    className = 'saves-grid'
                >
                    {savesAttributes.map(buildField)}
                </Box>
                <Box
                    noValidate
                    autoComplete="off"
                    className = 'skills-grid'
                >
                    {skillsAttributes.map(buildField)}
                </Box>
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
    let attribute = params.attribute;
    let label = Object.keys(attribute)[0];
    let value = attribute[label]['value'];
    console.log(`${attribute}\n${label}\n${value}`);
    if (value === 'list') {
        return (
            <List
                id={params.name}
                subheader={params.name}
                variant="filled"
            />
        );
    } else if (value === 'table') {
        let table = attribute[label]['table'];
        console.log(table);
        return (
            <GenerateTable
                id={label}
                table={table}
            />
        )
    }
    else {
        return (
            <TextField
                id={label}
                label={label}
                defaultValue={monsterData[label] || 'N/A'}
                variant="filled"
            />
        );
    }
}

function GenerateTable(params) {
    let table = params.table;
    let label = params.id;
    return (
        <TableContainer component={Paper}>
            <p><strong>{params.id}</strong></p>
            <Table 
                sx = {{}}
                size = {'small'}
            >
                <TableHead>
                    <GenerateHeaders
                        table={table}
                        label = {label}
                    />
                </TableHead>
                <GenerateBody
                    headers = {table}
                    data = {monsterData[label]}
                    label = {label}
                />
            </Table>
            <Button
                className = 'Buttons'
            >Add Ability</Button>
        </TableContainer>
    )
}

function GenerateHeaders(params) {
    let headers = params.table;
    let id = params.label;
    return (
        <TableRow>
            {headers.map((column) => (
                <TableCell
                    key={`${id}-${column.header}`}
                    padding = 'none'
                >
                    {column.header}
                </TableCell>
            ))}
        </TableRow>
    )
}

function GenerateBody(params) {
    let headers = params.headers;
    let data = params.data;
    console.log(data.length);
    return (
        <TableBody id = {`${params.label}-body`}>
            {data.map((row) => (
                <TableRow>
                    {headers.map((column) => (
                        <TableCell
                            component = {TextField}
                            id={""}
                            defaultValue={[row[column.header]] || 'N/A'}
                            variant="filled"
                            padding = 'none'
                            size = 'size'
                        >
                        </TableCell>
                    ))}
                    <TableCell
                        className = 'Buttons'
                        component = {Button}
                    >DELETE</TableCell>    
                </TableRow>
            ))}
        </TableBody>
    )
}

export default AttributeFields;