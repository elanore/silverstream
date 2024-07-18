import React from "react";
import logo from "../images/logo1.png";
import  signout  from "../images/signout.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useNavigate } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate();
  const handleSignOut=()=>{
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={logo}
        alt="Logo"
      />
      <div className="flex p-4">
        <img className="w-12 h-12 " src={signout} alt="user-icon" />
        <button onClick={handleSignOut}className="font-bold text-white">(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
