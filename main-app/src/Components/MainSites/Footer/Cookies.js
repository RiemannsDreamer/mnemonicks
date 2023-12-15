import React from "react";


/**
 * Cookie Policy. Not implemented yet. At the moment only general Information.
 * @returns {Element}
 * @constructor
 */
const Cookies = () =>
{

    return (

        <div className={"h-screen text-center text-white"}>
            <h1 className={"my-10"}>Your privacy - is your right!</h1>
            <strong>Remark:</strong>
            <p>
                We do not use cookies at the moment!
                <br/>
                We do not collect any user data, apart from standard information that is collected by our hosting provider by default.
                <br/>
                Find out more here: green.ch
                <br/>
                A fully designed cookie policy will follow when this website is completely implemented...
            </p>
        </div>
    )
}

export default Cookies