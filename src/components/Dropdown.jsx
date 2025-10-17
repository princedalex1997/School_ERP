import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {label}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item) => (
            <Link to={item.path} className="dropdown-item" key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
