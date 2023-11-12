
import "../../Styles/CornerImageStyle.css";
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
            <img src={imageUrl} alt="Corner Image" className="corner-image" />
            {showTooltip && <Tooltip content={tooltipContent} />}
        </div>
    );
};

export default CornerImage;
