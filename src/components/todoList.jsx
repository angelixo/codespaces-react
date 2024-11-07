import React, { useState, useMemo } from 'react';

const ExpensiveComputation = ({ num, count }) => {
    return <div>{num} and count {count}</div>;
};

export const TodoList= () => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(1);

    const memoizedValue = useMemo(() => {
        return <ExpensiveComputation num={num} count={count} />;
    }, [num]);

    return (
        <div>
            <h1>useMemo Demo</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
            <button onClick={() => setNum(num + 1)}>Increment Num: {num}</button>
            {memoizedValue}
        </div>
    );
};

