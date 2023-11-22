
import React from "react";
// import "../../Styles/MainSites/MnemoMax/ProgressItem.css";

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
