import React from "react";
import "./Header.css"; // Import your CSS file for styling

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="header__right">
        <button>Login/Signup</button>
      </div>
    </div>
  );
};

export default Header;
