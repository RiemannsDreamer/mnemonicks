import React from "react";


/**
 * Simple credits, implemented when worked as a team.
 * @returns {Element}
 * @constructor
 */
const Credits = () =>
{

    return (

        <div className={"h-screen text-center text-white"}>
            <h1 className={"mt-20 italic"}>"I am not young enough to know everything."</h1>
            <h2 className={"mt-5"}>Oscar Wilde</h2>
            <br/>
            <p className={"mt-20"}>Source: <a href={"https://beruhmte-zitate.de/zitate/1982587-oscar-wilde-ich-bin-nicht-jung-genug-um-alles-zu-wissen/"} target="_blank">Link...</a> </p>

        </div>
    )
}

export default Credits