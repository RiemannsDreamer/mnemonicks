import React, { useState, useEffect } from "react";

import "../../Styles/MainSites/MnemoMax/MnemoClock.css"

const MnemoClock = () => {
    const [startTime, setStartTime] = useState(new Date());
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setElapsedTime(now - startTime);
        }, 1000);

        return () => clearInterval(interval);
    }, [startTime]);

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
