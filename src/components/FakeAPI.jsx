import React, { useState, useCallback } from 'react';

// Mocked API call
const mockApiCall = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fetched data for item ${id}`);
        }, 2000);
    });
};

export const FakeAPI = () => {
    const [data, setData] = useState('');
    const [id, setId] = useState(1);
    const [count, setCount] = useState(0);

    console.log('Render!')
    const fetchData = useCallback(async (itemId) => {
        console.log('Feching Data from useCallback')
        const result = await mockApiCall(itemId);
        setData(result);
    }, []);

    const fetchDataD = (async (itemId) => {
        console.log('Feching Data from D')
        const result = await mockApiCall(itemId);
        setData(result);
    });
    
    fetchDataD(id)

    return (
        <div>
            <h1>useCallback Demo</h1>
            <p>Data: {data}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
            <button onClick={() => fetchData(id)}>Fetch Data</button>
            <button onClick={() => setId(id + 1)}>Increment ID (Current: {id})</button>
        </div>
    );
};