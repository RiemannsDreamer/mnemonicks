import React from "react";
import {useEffect, useRef} from "react"


import MnemoMax from "./MnemoMax";



const MainAppSite = () => {
    const scrollToContent = () => {
        // Finde die Höhe des Headers oder anderen übergeordneten Elements
        const headerHeight = document.getElementById("header").clientHeight;

        // Scroll nach unten, um den Header zu berücksichtigen
        window.scrollTo({
            top: headerHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToContent();
    }, []);

    return (
        <div className={"my-auto"}>
            <MnemoMax />
        </div>
    );
};

export default MainAppSite