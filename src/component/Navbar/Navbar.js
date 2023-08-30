import React from "react";
import "./Navbar.css";
import Calender_icon from "../../img/Calender_icon.png";
import User_icon from "../../img/User_icon.png";

const Navbar = () => {
  const currentDate = new Date();
  const formattedDate = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}`;

  return (
    <nav className="navbar">
      <div className="icon-date-container">
        <img
          src={Calender_icon}
          alt="Calender_icon"
          className="icon calender_icon"
        />
        <span className="date">{formattedDate}</span>
      </div>
      <div className="icon-container">
        <img src={User_icon} alt="User_icon" className="icon user_icon" />
      </div>
    </nav>
  );
};

export default Navbar;
