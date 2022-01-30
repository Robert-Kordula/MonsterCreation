import '../App.css';
import React, { useEffect, useState } from 'react';
import StringFilter from '../components/Forms/StringFilter';
import DynamicTable from '../components/Tables/DynamicTable';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';

export default function AttributeFields(props) {

    // const Attributes = [
    //     {
    //         AboutAttribute: [
    //             {
    //                 'img_main': {
    //                     value: 'image'
    //                 }
    //             },
    //             {
    //                 'size': {
    //                     value: 'string',
    //                     required: true
    //                 }
    //             },
    //             {
    //                 'type': {
    //                     value: 'string',
    //                     required: true
    //                 }
    //             },
    //             {
    //                 'subtype': {
    //                     value: 'string'
    //                 }
    //             },
    //             {
    //                 'group': {
    //                     value: 'string',
    //                     required: true
    //                 }
    //             },
    //             {
    //                 'alignment': {
    //                     value: 'string',
    //                     required: true
    //                 }
    //             },
    //             {
    //                 'languages': {
    //                     value: 'string'
    //                 }
    //             },
    //             {
    //                 'challenge_rating': {
    //                     value: 'integer',
    //                     required: true
    //                 }
    //             }
    //         ]
    //     },
    //     {
    //         StatsAttributes: [
    //             {
    //                 'armor_class': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'armor_desc': {
    //                     value: 'string'
    //                 }
    //             },
    //             {
    //                 'hit_points': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'hit_dice': {
    //                     value: 'string'
    //                 }
    //             },
    //             {
    //                 'speed': {
    //                     value: 'string'
    //                 }
    //             },
    //             {
    //                 'strength': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'dexterity': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'constitution': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'intelligence': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'wisdom': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'charisma': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'perception': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'senses': {
    //                     value: 'string'
    //                 }
    //             }
    //         ]
    //     },
    //     {
    //         SavesAttributes: [
    //             {
    //                 'armor_class': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'armor_desc': {
    //                     value: 'string'
    //                 }
    //             },
    //             {
    //                 'hit_points': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'hit_dice': {
    //                     value: 'string'
    //                 }
    //             },
    //             {
    //                 'speed': {
    //                     value: 'string'
    //                 }
    //             },
    //             {
    //                 'strength': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'dexterity': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'constitution': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'intelligence': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'wisdom': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'charisma': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'perception': {
    //                     value: 'integer'
    //                 }
    //             },
    //             {
    //                 'senses': {
    //                     value: 'string'
    //                 }
    //             }
    //         ]
    //     },
    //     {
    //         SkillsAttributes: [
    //             {
    //                 'skills': {
    //                     value: 'list',
    //                     list: {
    //                         value: 'object',
    //                         object: 'string'
    //                     }
    //                 }
    //             },
    //             {
    //                 'actions': {
    //                     value: 'table',
    //                     table: [
    //                         {
    //                             header: 'name',
    //                             value: 'string',
    //                             required: true
    //                         },
    //                         {
    //                             header: 'desc',
    //                             value: 'string',
    //                             required: true
    //                         },
    //                         {
    //                             header: 'attack_bonus',
    //                             value: 'integer'
    //                         },
    //                         {
    //                             header: 'damage_dice',
    //                             value: 'string'
    //                         },
    //                         {
    //                             header: 'damage_bonus',
    //                             value: 'integer'
    //                         }
    //                     ]
    //                 }
    //             },
    //             // {
    //             //     'reactions': {
    //             //         value: 'table',
    //             //         table: [
    //             //             {
    //             //                 header: 'name',
    //             //                 value: 'string',
    //             //                 required: true
    //             //             },
    //             //             {
    //             //                 header: 'desc',
    //             //                 value: 'string',
    //             //                 required: true
    //             //             }
    //             //         ]
    //             //     }
    //             // },
    //             {
    //                 'legendary_desc': {
    //                     value: 'list'
    //                 }
    //             },
    //             {
    //                 'legendary_actions': {
    //                     value: 'table',
    //                     table: [
    //                         {
    //                             header: 'name',
    //                             value: 'string',
    //                             required: true
    //                         },
    //                         {
    //                             header: 'desc',
    //                             value: 'string',
    //                             required: true
    //                         }
    //                     ]
    //                 }
    //             },
    //             {
    //                 'special_abilities': {
    //                     value: 'table',
    //                     table: [
    //                         {
    //                             header: 'name',
    //                             value: 'string',
    //                             required: true
    //                         },
    //                         {
    //                             header: 'desc',
    //                             value: 'string',
    //                             required: true
    //                         }
    //                     ]
    //                 }
    //             },
    //             {
    //                 'spell_list': {
    //                     value: 'list',
    //                     list: {
    //                         value: 'string'
    //                     }
    //                 }
    //             }
    //         ]
    //     }
    // ];

    const aboutAttributes = [
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
    //const attributeList = [];

    const { name } = useParams();
    const [data, setData] = useState(props.data || {});

    const sendData = async () => {
        console.log(data);
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

    const buildField = (attribute) => {
        let label = Object.keys(attribute)[0];
        if (attribute[label].value === 'table') {
            const columns = attribute[label].table;
            return (<DynamicTable 
                        label={label} 
                        data={data} 
                        columns={columns} 
                        useData={[data, setData]}
                    />);
        }
        else return (<StringFilter label={label} userFilters={[data, setData]} />);
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
            <TextField
                id='notes'
                key='notes'
                label='notes'
                multiline
                minRows={3}
                maxRows={6}
                variant='outlined'
                onChange={(event) => console.log(event.target.value)}
                defaultValue={data['notes'] || 'N/A'}
            />
            <Fab
                className='Buttons UpdateButton'
                variant='extended'
                size='medium'
                id='UpdateButton'
                onClick={sendData}>
                SAVE CHANGES</Fab>
        </Box>
    )
}