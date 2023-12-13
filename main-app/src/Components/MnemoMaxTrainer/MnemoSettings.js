import React, {useContext, useState} from "react";
import App from "../../App";
import {AppState} from "../MainSites/MainMenu/MnemoContexts";
import MnemoButton from "./MnemoButton";


const MnemoSettings = () => {


    const {appState, setAppState} = useContext(AppState)

    const handleSubmit = (event) => {

        let batchSizeInput = event.target.elements.batchSize.value;
        let chunkSizeInput = event.target.elements.chunkSize.value;

        batchSizeInput = parseInt(batchSizeInput)
        chunkSizeInput = parseInt(chunkSizeInput)

        setAppState((previous) => ({
            ...previous,
            batchSize: batchSizeInput,
            chunkSize: chunkSizeInput,
            trainingStatus: "DefaultMessage",
        }));
    };

    return (
        <div className={"text-white text-3xl text-center"}>
            <h1>Choose your preferences: </h1>
            <form onSubmit={handleSubmit}>
                <label className={"text-xl"} htmlFor="batchSize">Batch Size : </label>
                <input className={"m-5 text-black"}
                       type="text"
                       id="batchSize"
                       name="batchSize"
                       defaultValue="22"/>
                <br/>
                <label className={"text-xl"} htmlFor="chunkSize">Chunk Size : </label>
                <input className={"m-5 text-black"}
                       type="text"
                       id="chunkSize"
                       name="chunkSize"
                       defaultValue="4"
                />
                <br/>
                <button className={"p-5 bg-cyan-800 opacity-80 rounded-xl"} type="submit">Save</button>
            </form>
        </div>
    )
}


export default MnemoSettings