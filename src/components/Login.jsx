import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage] =useState(null)

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleForm =()=>{
    //form validation
    

    //console.log(email);
    //console.log(password);
    const message = checkValidData(email.current.value, password.current.value);
    //console.log(message);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()}  className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
        <h1 className="font-bold text-3xl py-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 m-2 w-full bg-gray-700 opacity-60 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone number"
          className="p-4 m-2 w-full bg-gray-700 opacity-60 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 m-2 w-full bg-gray-700 opacity-60 rounded-lg"
        />
        <p className="text-red-600">{errorMessage}</p>

        <button className="p-4 m-2 bg-red-700 w-full rounded-lg" onClick={handleForm}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Silver Stream ? sign up now"
            : "Already a user Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
