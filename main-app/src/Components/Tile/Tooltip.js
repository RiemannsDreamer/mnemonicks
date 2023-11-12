import React, {Component} from 'react';
import "../../Sytles/TooltipStyle.css";

const Tooltip = ({ title, text }) => {
    return (
        <div className="tooltip">
            <strong>{title}</strong>
            <p>{text}</p>
        </div>
    );
};

export default Tooltip;

