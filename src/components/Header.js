import React, { useState, useContext } from "react";
import Context from "./Context";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'



const Header = () => {
  const [authentication, setAuthentication] = useState(false);
  const store = useContext(Context).user;
  // console.log(store);
  const cartItems = useSelector(store=> store.cart.items)

  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg">
      <Link to={"/"}>
        {" "}
        <img
          className="w-20"
          alt="logo"
          src="https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg"></img>
      </Link>

      <div className="flex space-x-6 text-gray-700 ">
        <h3 className="text-lg font-semibold antialiased  hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <Link to={"/"}>Home</Link>
        </h3>
        <h3 className="text-lg font-semibold antialiased  hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <Link to={"/About"}>About</Link>
        </h3>
        <h3 className="text-lg font-semibold antialiased  hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <Link to={"/Contact"}>Contact</Link>
        </h3>
        <h3 className="text-lg font-semibold antialiased  hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <Link to={"/Instamart"}>Instamart</Link>
        </h3>  <h3 className="text-lg font-semibold antialiased  hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          <Link to={"/Cart"}>Cart ({cartItems?.length} items)</Link>
        </h3>
      </div> <h1>{store.name}</h1>
      <div className="flex items-center ">
        {authentication ? (<>
           
          <button className="border-solid border-2  hover:text-violet-900 active:text-violet-900 rounded-md px-2 bg-white text-black shadow-xs mr-5" type="submit" onClick={() => setAuthentication(false)}>
            Logout
          </button>
          </>) : (
          <button className="border-solid border-2  hover:text-violet-900 active:text-violet-900 rounded-md px-2 bg-white text-black shadow-xs mr-5" type="submit" onClick={() => setAuthentication(true)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
