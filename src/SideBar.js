// SideBar.js

import React, { useState } from "react";
import "./styles/styles.css";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleSideBar}>
        {isOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>
      {isOpen && (
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          {/* Add more menu items as needed */}
        </ul>
      )}
    </div>
  );
}

export default SideBar;
