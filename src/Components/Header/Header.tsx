import React from "react";
import "./Header.css"; // Import your CSS file for styling

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <a href="/">Home</a>
        <a href="/">My Tickets</a>
        <a href="/">Contact</a>
      </div>
      <div className="header__right">
        <input placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
