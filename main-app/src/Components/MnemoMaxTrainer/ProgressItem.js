
import React from "react";


/**
 * Deprecated Components.
 * Was used to display single progress items which should show what the user has done discretely.
 * Will be deleted maybe.
 *
 * @param label
 * @param progress
 * @returns {Element}
 * @constructor
 */
const ProgressBarItem = ({ label, progress }) => {
    return (
        <div className="progress-item">
            <div className="progress-label">{label}</div>
            <div className="progress-content-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBarItem;
