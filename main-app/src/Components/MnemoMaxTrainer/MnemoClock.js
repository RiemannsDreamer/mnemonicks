import React, {useState, useEffect, useContext} from "react";
// import "../../Styles/MainSites/MnemoMax/MnemoClock.css";

// Import contexts
import {
    LearningIsRunningContext,
    ClockCountSeconds,
    ActualStartTime,
    TrainingStatus
} from "../MainSites/MainMenu/MnemoContexts";

const MnemoClock = () => {
    const {isLearningRunning, setIsLearningRunning} = useContext(LearningIsRunningContext);
    const {trainingStatus,setTrainingStatus} = useContext(TrainingStatus)
    const {timeInSeconds, setTimeInSeconds} = useContext(ClockCountSeconds);
    let {actualStartTime,setActualStartTime} = useContext(ActualStartTime)


    let intervalId;
    useEffect(() => {


        if (trainingStatus === "Train") {
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
    }, [trainingStatus, setTimeInSeconds]);

    const formatDigit = (digit) => (digit < 10 ? `0${digit}` : digit);

    const hours = formatDigit(Math.floor(timeInSeconds / 3600));
    const minutes = formatDigit(Math.floor((timeInSeconds % 3600) / 60));
    const seconds = formatDigit(Math.floor(timeInSeconds % 60));

    return (
            <div className="flex relative w-2/3 mx-auto m-4">
                <div className="text-center w-full bg-cyan-950 text-white p-4 rounded-lg shadow-2xl">
                    <span className="text-3xl">{hours}</span>
                    <span className="mx-2">:</span>
                    <span className="text-3xl">{minutes}</span>
                    <span className="mx-2">:</span>
                    <span className="text-3xl">{seconds}</span>
                </div>
            </div>
    );

};

export default MnemoClock;
