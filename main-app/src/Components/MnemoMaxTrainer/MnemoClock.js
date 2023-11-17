import React, {useState, useEffect, useContext} from "react";
import "../../Styles/MainSites/MnemoMax/MnemoClock.css";

// Import contexts
import {LearningIsRunningContext, ClockCountSeconds} from "../MainSites/MainMenu/MnemoContexts";

const MnemoClock = () => {
    const {isLearningRunning, setIsLearningRunning} = useContext(LearningIsRunningContext);
    const {timeInSeconds, setTimeInSeconds} = useContext(ClockCountSeconds);

    const [elapsedTime, setElapsedTime] = useState(0);

    let intervalId;
    useEffect(() => {


        if (isLearningRunning) {
            const startTime = new Date().getTime() / 1000;

            const updateElapsedTime = () => {
                const actualTime = new Date().getTime() / 1000;
                const elapsedSeconds = (actualTime - startTime);
                setElapsedTime(elapsedSeconds);

                setTimeInSeconds(elapsedSeconds);
            };

            intervalId = setInterval(updateElapsedTime, 1000);
        } else {
            clearInterval(intervalId);
            setElapsedTime(0);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isLearningRunning, setTimeInSeconds]);

    const formatDigit = (digit) => (digit < 10 ? `0${digit}` : digit);

    const hours = formatDigit(Math.floor(timeInSeconds / 3600));
    const minutes = formatDigit(Math.floor((timeInSeconds % 3600) / 60));
    const seconds = formatDigit(Math.floor(timeInSeconds % 60));

    return (
        <div className={"mnemo-clock-container"}>
            <span>{hours}</span>
            <span style={{margin: "0 4px"}}>:</span>
            <span>{minutes}</span>
            <span style={{margin: "0 4px"}}>:</span>
            <span>{seconds}</span>
        </div>
    );
};

export default MnemoClock;
