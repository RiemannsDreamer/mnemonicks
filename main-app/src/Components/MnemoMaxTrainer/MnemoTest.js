import React, {useContext} from "react";
import {useState} from "react";

import {unChunkingBatch} from "../MainSites/MainMenu/ComputationsDataGet";
import {ActualBatch} from "../MainSites/MainMenu/MnemoContexts";


const MnemoTest = () => {

    const {actualBatch, setActualBatch} = useContext(ActualBatch)

    // Annahme: actualBatch ist ein Array von Zahlen
    const [eingaben, setEingaben] = useState(Array(actualBatch.length).fill(''));

    const handleInputChange = (index, value) => {
        const neueEingaben = [...eingaben];
        neueEingaben[index] = value;
        setEingaben(neueEingaben);
    };

    const pruefeEingabe = () => {
        // Hier kannst du die Logik für die Überprüfung der Eingaben implementieren
        console.log('Eingaben überprüfen:', eingaben);
    };

    return (

        <div className={"w-5/6 h-4/6"}>
            <div className="max-h-full h-5/6 w-full grid grid-cols-10 grid-rows-4 gap-3 overflow-scroll">
                {actualBatch.map((number, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            className="w-10 h-10 border border-solid border-white opacity-80 bg-gradient-to-br from-cyan-500 to-cyan-700 text-center"
                            value={eingaben[index]}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>

            {/* Beispiel für einen "OK"-Button zum Überprüfen der Eingaben */}
            <button onClick={pruefeEingabe} className={"w-20 h-10 bg-gradient-to-tr from-cyan-400 to-cyan-800 rounded-2xl m-5"}>Check</button>
        </div>
    )
}

export default MnemoTest