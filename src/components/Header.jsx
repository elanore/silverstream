import React from "react";
import logo from "../images/logo1.png";
import  signout  from "../images/signout.png";



const Header = () => {
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={logo}
        alt="Logo"
      />
      <div className="flex">
        <img className="w-12 h-12" src={signout} alt="user-icon" />
        <button>(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
