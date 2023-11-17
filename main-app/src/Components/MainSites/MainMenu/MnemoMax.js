import React, {useState} from "react";
import "../../../Styles/MainSites/MnemoMax/MnemoMax.css";
import MnemoMenu from "../../MnemoMaxTrainer/MnemoMenu";
import MnemoProgressBar from "../../MnemoMaxTrainer/MnemoProgressBar";
import MnemoClock from "../../MnemoMaxTrainer/MnemoClock";
import MnemoContent from "../../MnemoMaxTrainer/MnemoContent";
import MnemoControlPanel from "../../MnemoMaxTrainer/MnemoControlPanel";

// Context import
import {LearningIsRunningContext, ClockCountSeconds, ActualStartTime} from "./MnemoContexts";

export default function MnemoMax() {
    const [isLearningRunning, setIsLearningRunning] = useState(false);
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [actualStartTime, setActualStartTime] = useState(0)

    return (
        <LearningIsRunningContext.Provider value={{isLearningRunning, setIsLearningRunning}}>
            <ClockCountSeconds.Provider value={{timeInSeconds, setTimeInSeconds}}>
                <ActualStartTime.Provider value={{actualStartTime, setActualStartTime}}>
                    <div className={"mnemo-max-container"}>
                        <div className={"mnemo-menu-container"}>
                            <MnemoMenu/>
                        </div>
                        <div className={"mnemo-main-content-container"}>
                            <div className={"progress-content"}>
                                <MnemoProgressBar/>
                            </div>
                            <div className={"mnemo-app-container"}>
                                <MnemoClock/>
                                <MnemoContent/>
                                <MnemoControlPanel/>
                            </div>
                        </div>
                    </div>
                </ActualStartTime.Provider>
            </ClockCountSeconds.Provider>
        </LearningIsRunningContext.Provider>
    );
}
