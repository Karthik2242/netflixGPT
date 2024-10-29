import React, { useState, useRef } from "react";

import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bgImg } from "../utils/constant";

// Login.js
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // Sign-up logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
    // Sign-in logic
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={bgImg}
          alt="background"
          className="object-cover w-screen h-screen"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black   md:w-5/12 lg:w-3/12 p-12 absolute mx-6 my-36 md:mx-auto right-0 left-0 rounded-lg text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-2 m-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            placeholder="Enter your name"
            type="text"
            className="p-2 m-3 w-full rounded-sm bg-gray-800 border-gray-50"
          />
        )}

        <input
          ref={email}
          placeholder="Email or mobile number"
          type="text"
          className="p-2 m-3 w-full rounded-sm bg-gray-800 border-gray-50"
        />

        <input
          ref={password}
          placeholder="Password"
          type="password"
          className="p-2 m-3 w-full rounded-sm bg-gray-800"
        />

        <p className="text-red-500 p-2 font-bold text-lg">{errorMessage}</p>

        <button
          onClick={handleButtonClick}
          className="p-2 m-3 bg-red-600 w-full rounded-sm"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn && (
          <div className="flex justify-center my-4">
            <p className="text-gray-300">OR</p>
          </div>
        )}

        {isSignIn && (
          <button className="p-2 m-3 bg-[#4e545c] w-full rounded-sm bg-opacity-80 font-bold">
            Use a sign-in code
          </button>
        )}

        <p className="p-2 m-2">
          {isSignIn ? "New to Netflix?" : "Already a user?"}
          <span
            onClick={toggleSignInForm}
            className="font-bold hover:cursor-pointer hover:underline decoration-white"
          >
            {isSignIn ? " Sign up now" : " Sign In"}
          </span>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
