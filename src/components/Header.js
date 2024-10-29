import React, { useEffect } from "react";
import userIcon from "../images/userIcon.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Logo } from "../utils/constant";
import {toggleGptSearchView} from '../utils/gptSlice'

const Header = () => {
  const user = useSelector((store) => store.user);
  const buttonTextToggle = useSelector((store)=> store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleGpt = () => {
    dispatch(toggleGptSearchView());

  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [auth, dispatch, navigate]);

  // Extract only the first name
  const firstName = user?.displayName?.split(" ")[0];

  return (
    <div className="absolute top-0 left-0 px-8 py-2 w-full z-10 flex flex-col md:flex-row justify-between bg-gradient-to-b from-transparent to-black bg-opacity-60">
      <img
        src={Logo}
        alt="Logo"
        className="w-40 h-20 mx-auto md:mx-0"
      />

      {user && (
        <div className="flex m-4 mx-auto md:mx-0">
          <button onClick={toggleGpt} className="bg-purple-500 opacity-90 font-bold text-white h-10 p-2 rounded-lg hover:bg-purple-400">{buttonTextToggle ? "Home" : "GPT Search"}</button>
          <div className="flex flex-col items-center">
            <img
              src={userIcon}
              alt="userIcon"
              className="w-10 h-10 mx-4 rounded-lg"
            />
            <p className="px-3 my-2 font-semibold text-white">{firstName}</p>
          </div>

          <button
            onClick={handleSignOut}
            className="font-bold text-white bg-black h-10 p-2 rounded-lg opacity-90"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
