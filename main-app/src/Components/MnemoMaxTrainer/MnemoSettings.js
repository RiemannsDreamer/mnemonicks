import React, {useContext, useState} from "react";
import App from "../../App";
import {AppState} from "../MainSites/MainMenuHeader/MnemoContexts";
import MnemoButton from "./MnemoButton";

/**
 * Landing component for the content box.
 * Contains the initial Settings for a training.
 * At the moment only Numbers are provided.
 * Choose batchSize and chunkSize here.
 *
 * @returns {Element}
 * @constructor
 */
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
            <h1>{appState.trainingType}</h1>
            <h2 className={"text-2xl"}>Choose your preferences</h2>
            <form onSubmit={handleSubmit}>
                <label className={"text-xl"} htmlFor="batchSize">Batch Size : </label>
                <input className={"m-5 text-black"}
                       type="text"
                       id="batchSize"
                       name="batchSize"
                       defaultValue="42"/>
                <br/>
                <label className={"text-xl"} htmlFor="chunkSize">Chunk Size : </label>
                <input className={"m-5 text-black"}
                       type="text"
                       id="chunkSize"
                       name="chunkSize"
                       defaultValue="4"
                />
                <br/>
                <button className={"p-3 bg-cyan-800 opacity-80 rounded-xl"} type="submit">Save</button>
            </form>
        </div>
    )
}


export default MnemoSettings