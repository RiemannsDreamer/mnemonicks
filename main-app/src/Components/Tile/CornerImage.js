
import "../../Styles/CornerImage.css";
import React, { useState } from 'react';
import Tooltip from './Tooltip';

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
            <img src={imageUrl} alt="Corner Image" className="corner-image" style={{width: "100%", height: "100%",border: "0.5px solid black"}} />
            {showTooltip && <Tooltip content={tooltipContent} />}
        </div>
    );
};

export default CornerImage;
