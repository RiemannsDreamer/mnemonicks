import React, { useState, useEffect, useContext } from "react";
import "../../Styles/MainSites/MnemoMax/MnemoClock.css";

// Import contexts
import { LearningIsRunningContext, ClockCountSeconds } from "../MainSites/MainMenu/MnemoContexts";

const MnemoClock = () => {
    const { isRunning, setIsRunning } = useContext(LearningIsRunningContext);
    const { timeInSeconds, setTimeInSeconds } = useContext(ClockCountSeconds);

    const [elapsedTime, setElapsedTime] = useState(timeInSeconds * 1000);

    useEffect(() => {
        let interval;

        if (isRunning) {
            const startTime = new Date() - elapsedTime;

            // Aktualisiere die Zeit sofort
            const updateElapsedTime = () => {
                const now = new Date();
                setElapsedTime(now - startTime);
                setTimeInSeconds(Math.floor(elapsedTime / 1000)); // Aktualisiere timeInSeconds
            };

            // Starte das Intervall
            interval = setInterval(updateElapsedTime, 1000);
        } else {
            clearInterval(interval);
        }

        // Kläre das Intervall auf, wenn die Komponente unmontiert wird
        return () => clearInterval(interval);
    }, [isRunning, elapsedTime, setTimeInSeconds]);

    const formatDigit = (digit) => (digit < 10 ? `0${digit}` : digit);

    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = formatDigit(Math.floor(totalSeconds / 3600));
    const minutes = formatDigit(Math.floor((totalSeconds % 3600) / 60));
    const seconds = formatDigit(totalSeconds % 60);

    return (
        <div className={"mnemo-clock-container"}>
            <span>{hours}</span>
            <span style={{ margin: "0 5px" }}>:</span>
            <span>{minutes}</span>
            <span style={{ margin: "0 5px" }}>:</span>
            <span>{seconds}</span>
        </div>
    );
};

export default MnemoClock;
