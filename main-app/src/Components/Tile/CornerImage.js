import React, { Component } from 'react';
import "../../Sytles/CornerImageStyle.css"

export function CornerImage()
{
    return (
        <div className={"CornerImage"}>
            <img src="/home/mercus/WebstormProjects/mnemonicks/main-app/public/Images/logo512.png" alt="Beispielbild" />
            {/* JSX für die Darstellung der Komponente */}
            <p>Hello</p>
        </div>
    );
}
