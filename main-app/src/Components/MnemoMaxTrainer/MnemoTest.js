import React, {useContext} from "react";
import {useState} from "react";

import {unChunkingBatch} from "../MainSites/MainMenu/ComputationsDataGet";
import {ActualBatch, ResultBatch, TrainingStatus} from "../MainSites/MainMenu/MnemoContexts";


const MnemoTest = () => {

    const {actualBatch, setActualBatch} = useContext(ActualBatch)
    const {trainingStatus,setTrainingStatus} = useContext(TrainingStatus)
    const {resultBatch,setResultBatch} = useContext(ResultBatch)

    const [eingaben, setEingaben] = useState(Array(actualBatch.length).fill(''));

    const handleInputChange = (index, value) => {
        const neueEingaben = [...eingaben];
        neueEingaben[index] = value;
        setEingaben(neueEingaben);
    };

    const pruefeEingabe = () => {

        setResultBatch(eingaben)

        const newActualBatch = [...actualBatch];
        const newResultBatch = [...resultBatch];
        newActualBatch.pop();
        newResultBatch.pop();
        setActualBatch(newActualBatch);
        setResultBatch(newResultBatch);

        console.log("batch "+actualBatch)

        setTrainingStatus("Result")
    };

    return (

        <div className={"w-5/6 h-4/6"}>
            <div className="max-h-50 h-40 w-full grid grid-cols-10 gap-3 overflow-scroll    ">
                {actualBatch.map((number, index) => (
                    <div key={index}>
                        <input
                            type="number"
                            className="w-10 h-10 border border-solid border-white opacity-80 bg-gradient-to-br from-cyan-500 to-cyan-700 text-center"
                            value={eingaben[index]}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>


            <button onClick={pruefeEingabe} className={"w-20 h-10 bg-gradient-to-tr from-cyan-400 to-cyan-800 rounded-2xl m-5"}>Check</button>
        </div>
    )
}

export default MnemoTest


