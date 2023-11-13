
import React from "react";
import MnemoDropdown from "./MnemoDropdown"; // Stelle sicher, dass der Pfad korrekt ist

import "../../Styles/MainSites/MnemoMax/MnemoMenu.css"

const MnemoMenu = () => {
    const menuItems = [
        { title: "Edit", items: ["Cut", "Copy", "Paste"] },
        { title: "Trainings", items: ["Option 1", "Option 2", "Option 3"] },
        { title: "Settings", items: ["Option A", "Option B", "Option C"] },
        { title: "File", items: ["Open", "Save", "Download"] },
        { title: "Sonstiges", items: ["Item 1", "Item 2", "Item 3"] },
    ];

    return (
        <div className="menu">
            {menuItems.map((menuItem, index) => (
                <MnemoDropdown
                    key={index}
                    title={menuItem.title}
                    items={menuItem.items}
                />
            ))}
        </div>
    );
};

export default MnemoMenu;
