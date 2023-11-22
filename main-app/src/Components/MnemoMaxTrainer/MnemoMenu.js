import React, { useState } from "react";

import RecursiveDropdown from "./RecursiveDropdown";
const MnemoMenu = ({ menuData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={"bg-gradient-to-tr from-cyan-600 to-cyan-900 rounded-2xl opacity-80"}>
            {menuData.map((menuItem, index) => (
                <RecursiveDropdown
                    key={index}
                    menuData={menuItem}
                    isOpen={isOpen}
                    handleToggleClick={handleToggleClick}
                />
            ))}
        </div>
    );
};
export default MnemoMenu;