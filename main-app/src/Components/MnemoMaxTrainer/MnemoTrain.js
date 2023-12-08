import React, {useContext, useEffect, useState} from "react";
import {
    ActualBatch,
    ActualChunkIndex,
    LearningIsRunningContext,
    TrainingStatus
} from "../MainSites/MainMenu/MnemoContexts";




const MnemoTrain = () => {
    const {actualBatch, setActualBatch} = useContext(ActualBatch)
    const {actualChunkIndex, setActualChunkIndex} = useContext(ActualChunkIndex)

    const {isLearningRunning,setIsLearningRunning} = useContext(LearningIsRunningContext)
    const {trainingStatus,setTrainingStatus} = useContext(TrainingStatus)

    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if ((trainingStatus === "Train") && countdown > 0) {
            const countdownInterval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            return () => {
                clearInterval(countdownInterval);
            };
        } else if (!(trainingStatus === "Train")) {
            setCountdown(5);
        }
    }, [countdown, trainingStatus]);

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