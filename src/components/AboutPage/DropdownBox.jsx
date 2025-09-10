import { useState } from "react";
import "./DropdownBox.css";
import DropdownArrow from "./DropdownArrow.jsx";

function DropdownBox(props, className) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`dropdown ${className}`}>
      <div className="dropdown-box" onClick={toggleDropdown}>
        <h1>{props.title}</h1>
        <div className={`arrow-wrapper ${isOpen ? "rotated" : ""}`}>
          <DropdownArrow />
        </div>
      </div>

      {isOpen && <div className="dropdown-content">{props.children}</div>}
    </div>
  );
}

export default DropdownBox;
