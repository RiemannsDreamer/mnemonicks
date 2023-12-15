import React, {useState, useEffect, useContext} from "react";
// import "../../Styles/MainSites/MnemoMax/MnemoClock.css";

// Import contexts
import {AppState
} from "../MainSites/MainMenu/MnemoContexts";
import App from "../../App";

const MnemoClock = () => {

    const {appState,setAppState} = useContext(AppState)

    let intervalId;
    useEffect(() => {

        // TODO: Altered

        if (appState.trainingStatus === "Train") {
            let startTime = new Date().getTime() / 1000

            const updateElapsedTime = () => {
                const actualTime = new Date().getTime() / 1000;
                const elapsedSeconds = (actualTime -  startTime);

                // TODO: altered
                setAppState((previous) => ({
                    ...previous,
                    clockCountSeconds: previous.clockCountSeconds + Math.floor(elapsedSeconds),
                }));
            };

            intervalId = setInterval(updateElapsedTime, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [appState]);

    const formatDigit = (digit) => (digit < 10 ? `0${digit}` : digit);

    const hours = formatDigit(Math.floor(appState.clockCountSeconds / 3600));
    const minutes = formatDigit(Math.floor((appState.clockCountSeconds % 3600) / 60));
    const seconds = formatDigit(Math.floor(appState.clockCountSeconds % 60));

    return (
            <div className="flex w-2/3 mx-auto m-4">
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
