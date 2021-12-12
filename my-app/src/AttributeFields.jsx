import './App.css';
import React from 'react';
import { TextField, Fab, Box, List, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { useParams } from 'react-router';

let monsterData;

function AttributeFields(props) {

    const aboutAttributes = [
        {
            'name': {
                value: 'string'
            }
        },
        {
            'img_main': {
                value: 'image'
            }
        },
        {
            'size': {
                value: 'string'
            }
        },
        {
            'type': {
                value: 'string'
            }
        },
        {
            'subtype': {
                value: 'string'
            }
        },
        {
            'group': {
                value: 'string'
            }
        },
        {
            'alignment': {
                value: 'string'
            }
        },
        {
            'languages': {
                value: 'string'
            }
        },
        {
            'challenge_rating': {
                value: 'integer'
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
                        value: 'string'
                    },
                    {
                        header: 'desc',
                        value: 'string'
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
                        value: 'string'
                    },
                    {
                        header: 'desc',
                        value: 'string'
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
                        value: 'string'
                    },
                    {
                        header: 'desc',
                        value: 'string'
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
                type='search'
                disabled
            />
            <Box>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    {aboutAttributes.map(buildField)}
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    {statsAttributes.map(buildField)}
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    {savesAttributes.map(buildField)}
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
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
        <TableContainer>
            <p>{params.id}</p>
            <Table>
                <TableHead>
                    <GenerateHeaders
                        table={table}
                        label = {label}
                    />
                </TableHead>
                <GenerateBody
                    headers = {table}
                    data = {monsterData[label]}
                />
            </Table>
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
        <TableBody>
            {data.map((row) => (
                <TableRow>
                    {headers.map((column) => (
                        <TableCell
                        >
                            {row[column.header]}
                        </TableCell>
                    ))}    
                </TableRow>
            ))}
        </TableBody>
    )
}

export default AttributeFields;