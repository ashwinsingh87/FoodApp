import React, { useState, useContext } from "react";
import Context from "./Context";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'



const Header = () => {
  const [authentication, setAuthentication] = useState(false);
  const store = useContext(Context).user;
  // console.log(store);
  const cartItems = useSelector(store => store.cart.items)

  return (
    <div className="flex z-50 justify-between items-center duration-500 hover:bg-pink-300 bg-pink-200 shadow-lg h-20 overflow-visible">
      <Link to={"/"}>

        <img
          className="w-20"
          alt="logo"
          src="https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg"></img>
      </Link>

 
      <div className="flex space-x-6  md:space-x-2 text-gray-700">
        <h3 className="text-lg md:font-medium md:text-base font-semibold antialiased hover:scale-105 hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <Link to={"/"}>Home</Link>
        </h3>
        <h3 className=" md:hidden text-lg font-semibold antialiased hover:scale-105 hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <Link to={"/About"}>About</Link>
        </h3>
        <h3 className="text-lg  md:hidden font-semibold antialiased hover:scale-105 hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <Link to={"/Contact"}>Contact</Link>
        </h3>
        <h3 className="md:font-medium md:text-base text-lg font-semibold antialiased hover:scale-105 hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <Link to={"/Cart"}>Cart({cartItems?.length} items)</Link>
        </h3>
      </div>
      <div className="flex items-center ">
      <h1 className="md:hidden pr-2">{store.name}</h1>
        {authentication ? (<>

          <button className="border-solid border-2 hover:scale-105 hover:text-violet-900 active:text-violet-900 rounded-md px-2 bg-white text-black shadow-xs mr-5" type="submit" onClick={() => setAuthentication(false)}>
            Logout
          </button>
        </>) : (
          <button className="border-solid border-2 hover:scale-105 hover:text-violet-900 active:text-violet-900 rounded-md px-2 bg-white text-black shadow-xs mr-5" type="submit" onClick={() => setAuthentication(true)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
