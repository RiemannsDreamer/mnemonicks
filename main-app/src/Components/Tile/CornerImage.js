import "../../Sytles/CornerImageStyle.css"

import React, { useState } from 'react';


const CornerImage = ({ imageUrl, tooltipContent }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="corner-image-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={imageUrl} alt="Corner Image" className="corner-image" />
            {showTooltip && <div className="tooltip">{tooltipContent}</div>}
        </div>
    );
};

export default CornerImage;
