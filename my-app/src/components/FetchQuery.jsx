import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

export default function FetchQuery(props) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: process.env.NODE_ENV === 'production',
                refetchOnWindowFocus: true,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <Query userComponent={props.userComponent} userProps={props.userProps} useURL={props.useURL}/>
        </QueryClientProvider>
    )
}

function Query(props) {
    const [url, setURL] = props.useURL;
    const { isLoading, error, data } = useQuery(['monster', url], () => fetchData(url));
    const UserComponent = props.userComponent;
    console.log(data? data.results.length: false);

    if (isLoading) return (
        <UserComponent 
        {...props.userProps}                     
        data={{results: []}}
        useURL={props.useURL} 
        status='loading'
    />);
    if (error) return (
        <UserComponent 
        {...props.userProps}                     
        data={{results: ['An error has occured: ' + error.message]}}
        useURL={props.useURL} 
        status='error'
    />);
    return (
        <UserComponent 
            {...props.userProps} 
            data={data} 
            useURL={props.useURL} 
            status='success'
    />);
}

async function fetchData(url){
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
};