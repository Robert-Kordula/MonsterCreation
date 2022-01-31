import AttributeFields from '../components/AttributeFields';
import FetchQuery from '../components/FetchQuery';
import { useParams } from 'react-router';
import React from "react";

const URL = 'http://localhost:3500/monster';

export default function AddMonster(props) {
    let { name } = useParams();
    return (
        <FetchQuery 
            userComponent={AttributeFields}
            userProps={{name: 'Add Monster', method: 'POST'}}
            url={`${URL}/${name || ''}`}
        />
    )
}