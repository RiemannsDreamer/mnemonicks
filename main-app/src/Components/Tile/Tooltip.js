import React from 'react';
import "../../Styles/Tooltip.css";


/**
 * Deprecated componet, used to display a tooltip for tiles in the beginning of dev. process.
 * Will be deleted.
 *
 * @param content
 * @returns {Element}
 * @constructor
 */
const Tooltip = ({ content }) => {
    return (
        <div className="tooltip">
            <p>{content}</p>
        </div>
    );
};

export default Tooltip;
