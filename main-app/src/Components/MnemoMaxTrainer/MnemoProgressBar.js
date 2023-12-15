
import React from "react";



const exampleProgressData = {
    relative: 50,
    absolute: 200,
    pastTime: "3h 45min",
    availableTime: "1d 12h",
};


const exampleProgressItems = Array.from({ length:3 }, (_, index) => ({
    id: index + 1,
    label: `Task ${index + 1}`,
    progress: Math.random() * 100,
}));

/**
 * Not really implemented yet.
 * Will be used to display information about the training and progress while training is on (session, live info).
 *
 * @returns {Element}
 * @constructor
 */
const MnemoProgressBar = () => {
    return (
        <div className="progress-bar">
            <div className="progress-info">
                <strong>Progress</strong>
                <div className="progress-data">
                    <p>STATIC INFO dev</p>
                    <p>Relative: {exampleProgressData.relative}%</p>
                    <p>Absolute: {exampleProgressData.absolute} tasks</p>
                    <p>Past Time: {exampleProgressData.pastTime}</p>
                    <p>Available Time: {exampleProgressData.availableTime}</p>
                </div>
                <hr className="progress-divider" />
            </div>
        </div>
    );
};

export default MnemoProgressBar;
