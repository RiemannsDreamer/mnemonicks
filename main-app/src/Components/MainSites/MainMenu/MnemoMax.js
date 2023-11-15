import React, { useState } from "react";
import "../../../Styles/MainSites/MnemoMax/MnemoMax.css";
import MnemoMenu from "../../MnemoMaxTrainer/MnemoMenu";
import MnemoProgressBar from "../../MnemoMaxTrainer/MnemoProgressBar";
import MnemoClock from "../../MnemoMaxTrainer/MnemoClock";
import MnemoContent from "../../MnemoMaxTrainer/MnemoContent";
import MnemoControlPanel from "../../MnemoMaxTrainer/MnemoControlPanel";

// Context import
import { LearningIsRunningContext, ClockCountSeconds } from "./MnemoContexts";

export default function MnemoMax() {
    const [isLearningRunning, setIsLearningRunning] = useState(false);
    const [countSeconds, setCountSeconds] = useState(0);

    return (
        <LearningIsRunningContext.Provider value={{ isLearningRunning, setIsLearningRunning }}>
            <ClockCountSeconds.Provider value={{ countSeconds, setCountSeconds }}>
                <div className={"mnemo-max-container"}>
                    <div className={"mnemo-menu-container"}>
                        <MnemoMenu />
                    </div>
                    <div className={"mnemo-main-content-container"}>
                        <div className={"progress-content"}>
                            <MnemoProgressBar />
                        </div>
                        <div className={"mnemo-app-container"}>
                            <MnemoClock />
                            <MnemoContent />
                            <MnemoControlPanel />
                        </div>
                    </div>
                </div>
            </ClockCountSeconds.Provider>
        </LearningIsRunningContext.Provider>
    );
}
