import React from 'react';

const useIsMouseMoving = () => {
    return false
}

export default function App() {
    const isMouseMoving = useIsMouseMoving()

    return (
        <div>
            {isMouseMoving ? "Mouse is moving" : "Mouse is idle"}
        </div>
    );
}
