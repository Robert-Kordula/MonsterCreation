import './App.css';
import AttributeFields from './AttributeFields';
import { useParams } from 'react-router';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import React from "react";

const URL = 'http://localhost:3500/monster';
const fetchMonster = async (id) => {
    let res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: process.env.NODE_ENV === 'production',
            refetchOnWindowFocus: false,
        },
    },
})

function EditMonster(props) {
    let { slug } = useParams();
    return (
        <QueryClientProvider client={queryClient}>
            <Query
                slug={slug} />
        </QueryClientProvider>
    )
}

function Query(props) {
    const { isLoading, error, data } = useQuery('monster', () => fetchMonster(props.slug))

    if (isLoading) return 'Loading...';
    if (error) return 'An error has occured: ' + error.message;

    console.log(data);
    return (
        <AttributeFields name='Edit Monster' method='PATCH' monster={data} />
    )
}

export default EditMonster;