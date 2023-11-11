import React, { Component } from 'react';
import "../../Sytles/TileStyle.css"
import {CornerImage} from "./CornerImage";


export function Tile()
{
    return (
    <div className={"Tile"}>
        <CornerImage/>
        <h1>This is a Tile!</h1>
        <h2>This is a Subtitle</h2>
        <p>ooo</p>
        {/* JSX für die Darstellung der Komponente */}
    </div>
);
}