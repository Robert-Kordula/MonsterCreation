import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
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
                value: 'string'
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
                value: 'string'
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
                list: {
                    value: 'object',
                    object: 'string'
                }
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
                value: 'list',
                list: {
                    value: 'string'
                }
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
        return <Attribute 
                    key={label} 
                    name={label} 
                    attribute={attribute}
                />;
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
            <Box className='grid-container'>
                <Box
                    noValidate
                    autoComplete="off"
                    className='about-grid'
                >
                    {aboutAttributes.map(buildField)}
                </Box>
                <Box
                    noValidate
                    autoComplete="off"
                    className='stats-grid'
                >
                    {statsAttributes.map(buildField)}
                </Box>
                <Box
                    noValidate
                    autoComplete="off"
                    className='saves-grid'
                >
                    {savesAttributes.map(buildField)}
                </Box>
                <Box
                    noValidate
                    autoComplete="off"
                    className='skills-grid'
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

function Attribute(props) {
    let attribute = props.attribute;
    let label = Object.keys(attribute)[0];
    let value = attribute[label]['value'];
    if (value === 'list') {
        let list = attribute[label]
        return (
            <GenerateList
                id={label}
                list={list}
            />
        );
    } else if (value === 'table') {
        let table = attribute[label].table;
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

function GenerateTable(props) {

    const [rows, setRows] = useState([]);
    let table = props.table;
    let label = props.id;

    useEffect(() => {
        if (monsterData[label] && monsterData[label].length > 0) {
            let tempRows = monsterData[label].map((item) => {
                return table.reduce((row, head) => {
                    row[head.header] = item[head.header];
                    return row;
                }, {})
            });
            setRows(tempRows);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const addNewRow = () => {
        let tempRows = [...rows, {}];
        setRows(tempRows);
    }

    const deleteRow = (index) => {
        if (rows.length > 1) {
            let tempRows = [...rows];
            console.log(tempRows.splice(index, 1));
            setRows(tempRows);
        } else {
            setRows([]);
        }
    };
    return (
        <TableContainer component={Paper}>
            <p><strong>{props.id}</strong></p>
            <Table
                sx={{}}
                size={'small'}
            >
                <TableHead>
                    <TableRow>
                        {table.map((column) => (
                            <TableCell
                                key={`${label}-${column.header}`}
                                padding='none'
                            >
                                {column.header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody id={`${label}-body`}>
                    {rows.map((row, index) => {
                        return (
                            <TableRow>
                                {table.map((column) => (
                                    <TableCell>
                                        <TextField
                                            id={""}
                                            defaultValue={row[column.header]}
                                            padding='none'
                                        />
                                    </TableCell>
                                ))}
                                <TableCell>
                                    <Button
                                        className='Buttons'
                                        onClick={() => deleteRow(index)}
                                    >DELETE</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Button
                className='Buttons'
                onClick={addNewRow}
            >Add Ability</Button>
        </TableContainer>
    )
}

function GenerateList(props) {

    return (
        <List
        ></List>
    );
}

export default AttributeFields;