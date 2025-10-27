import React from 'react';

function useMemo<T>(f: () => T, deps: any[]) {
    return f();
}

export default function App() {
    const [state, setState] = React.useState(0);

    const memoizedValue = useMemo(() => {
        console.log('memo function run');
        return 1;
    }, []);

    return (
        <div>
            <p style={{ color: 'white' }}>Render: {state}</p>
            <button onClick={() => setState(n => n + 1)}>Trigger rerender</button>
        </div>
    );
}
