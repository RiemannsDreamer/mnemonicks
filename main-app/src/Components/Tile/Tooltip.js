import React from 'react';
import "../../Styles/Tooltip.css";

const Tooltip = ({ content }) => {
    return (
        <div className="tooltip">
            <p>{content}</p>
        </div>
    );
};

export default Tooltip;
