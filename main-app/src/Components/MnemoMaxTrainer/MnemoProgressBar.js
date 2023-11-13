
import React from "react";
import ProgressItem from "./ProgressItem";
import "../../Styles/MainSites/MnemoMax/MnemoProgressBar.css";


const exampleProgressData = {
    relative: 50,
    absolute: 200,
    pastTime: "3h 45min",
    availableTime: "1d 12h",
};


const exampleProgressItems = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    label: `Task ${index + 1}`,
    progress: Math.random() * 100,
}));

const MnemoProgressBar = () => {
    return (
        <div className="progress-bar">
            <div className="progress-info">
                <h1>Mnemo Progress</h1>
                <div className="progress-data">
                    <p>Relative: {exampleProgressData.relative}%</p>
                    <p>Absolute: {exampleProgressData.absolute} tasks</p>
                    <p>Past Time: {exampleProgressData.pastTime}</p>
                    <p>Available Time: {exampleProgressData.availableTime}</p>
                </div>
                <hr className="progress-divider" />
            </div>
            <div className="progress-items">
                {exampleProgressItems.map((item) => (
                    <ProgressItem key={item.id} label={item.label} progress={item.progress} />
                ))}
            </div>
        </div>
    );
};

export default MnemoProgressBar;
