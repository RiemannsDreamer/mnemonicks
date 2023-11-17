import React, {useState, useEffect, useContext} from "react";
import "../../Styles/MainSites/MnemoMax/MnemoClock.css";

// Import contexts
import {LearningIsRunningContext, ClockCountSeconds,ActualStartTime} from "../MainSites/MainMenu/MnemoContexts";

const MnemoClock = () => {
    const {isLearningRunning, setIsLearningRunning} = useContext(LearningIsRunningContext);
    const {timeInSeconds, setTimeInSeconds} = useContext(ClockCountSeconds);
    let {actualStartTime,setActualStartTime} = useContext(ActualStartTime)


    let intervalId;
    useEffect(() => {


        if (isLearningRunning) {
            let startTime = new Date().getTime() / 1000

            const updateElapsedTime = () => {
                const actualTime = new Date().getTime() / 1000;
                const elapsedSeconds = (actualTime -  startTime);

                setTimeInSeconds(timeInSeconds + Math.floor(elapsedSeconds));
            };

            intervalId = setInterval(updateElapsedTime, 1000);
        } else {
            clearInterval(intervalId);
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
