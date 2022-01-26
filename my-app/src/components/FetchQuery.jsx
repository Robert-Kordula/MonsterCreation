import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

export default function FetchQuery(props) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: process.env.NODE_ENV === 'production',
                refetchOnWindowFocus: false,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Query userComponent={props.userComponent} userProps={props.userProps} url={props.url}/>
        </QueryClientProvider>
    )
}

function Query(props) {
    const { isLoading, error, data } = useQuery('monster', () => fetchData(props.url))
    const UserComponent = props.userComponent;

    if (isLoading) return 'Loading...';
    if (error) return 'An error has occured: ' + error.message;
    
    return (
        <div>
            {<UserComponent {...props.userProps} data={data} />}
        </div>
    )
}

async function fetchData(url){
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
};