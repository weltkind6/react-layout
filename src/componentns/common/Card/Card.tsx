import React, { useState } from 'react';
import './styles.css';

const App = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="container">
            <div
                className={`block ${isHovered ? 'block-hovered' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Block 1
            </div>
            <div className={`block ${isHovered ? 'block-visible' : ''}`}>
                Block 2
            </div>
            <div className="block">Block 3</div>
        </div>
    );
};

export default App;
