import React, {useContext, useEffect, useState} from "react";
import {ActualBatch, ActualChunkIndex, LearningIsRunningContext} from "../MainSites/MainMenu/MnemoContexts";




const MnemoTrain = () => {
    const {actualBatch, setActualBatch} = useContext(ActualBatch)
    const {actualChunkIndex, setActualChunkIndex} = useContext(ActualChunkIndex)

    const {isLearningRunning,setIsLearningRunning} = useContext(LearningIsRunningContext)

    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if (isLearningRunning && countdown > 0) {
            const countdownInterval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            return () => {
                clearInterval(countdownInterval);
            };
        } else if (!isLearningRunning) {
            setCountdown(5);
        }
    }, [countdown, isLearningRunning]);

    return (
        <div>
            {countdown > 0 && (
                <p className={"text-center text-white text-7xl"}>
                    {countdown}
                </p>
            )}
            {countdown === 0 && (
                <p className={"text-center text-white text-4xl"}>
                    {actualBatch[actualChunkIndex]}
                </p>
            )}
        </div>
    )
}

export default MnemoTrain