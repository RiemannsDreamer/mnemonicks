import React, { useState } from "react";

import RecursiveDropdown from "./RecursiveDropdown";

/**
 * Menu in the MnemoMax app.
 * The user can choose different trainings / training types here.
 * Later used for state management and rendering different training contents.
 *
 * @param menuData
 * @returns {Element}
 * @constructor
 */
const MnemoMenu = ({ menuData }) => {

    return (
        <div className={"w-full bg-gradient-to-tr from-cyan-600 to-cyan-900 rounded-2xl opacity-80"}>
            {menuData.map((menuItem, index) => (
                <RecursiveDropdown
                    key={index}
                    menuData={menuItem}
                />
            ))}
        </div>
    );
};
export default MnemoMenu;