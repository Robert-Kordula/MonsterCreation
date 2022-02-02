import AttributeFields from '../components/AttributeFields';
import FetchQuery from '../components/FetchQuery';
import { useParams } from 'react-router';
import React, {useState} from "react";

const URL = 'https://api.open5e.com/monsters/?';

export default function EditMonster(props) {
    let { name } = useParams();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name);
    const [url, setURL] = useState(`${URL}name=${name}`)
    return (
        <FetchQuery 
            userComponent={AttributeFields}
            userProps={{name: 'Edit Monster', method: 'PATCH'}}
            useURL={[url, setURL]}
        />
    )
}