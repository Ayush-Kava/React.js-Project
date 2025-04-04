import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import api from "../api";

function Header({isDetail, onSearch}) {
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [property, setProperty] = useState([]);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleSubmit = () => {
    if (isNaN(maxPrice)) {
      alert("Enter valid ");
    } else {
      onSearch(maxPrice);
    }
  };

  return (<div className="w-full h-[5vw] sticky top-0 z-50 bg-[rgb(255,255,255)] rounded-b-4xl border-b border-b-amber-300  flex flex-row justify-between gap-10 items-center">
    <div className="logo h-full ">
      <img src="/images/logo.png" alt="Logo" className="h-full w-full object-cover"/>
    </div>

    {
      !isDetail && (<form onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }} className="h-1/2">
        <div className="search h-full items-center w-[30vw] relative ">
          <input type="text" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} placeholder="Enter the price" className="h-full w-full text-xl bg-[#f2ecff] rounded-4xl focus:outline-none focus:border-2 focus:border-gray-300 px-5"/>
          <button type="submit" className="absolute inset-y-0 right-0 flex items-center px-5 text-gray-800 cursor-pointer hover:text-gray-300">
            <i className="fa-solid fa-magnifying-glass px-1 text-base sm:text-lg md:text-xl"></i>
          </button>
        </div>
      </form>)
    }

    <div className="right h-auto mr-5 flex">
      <div className="relative ">
        <button className="bg-amber-100 border border-black h-full ml-5 px-6  py-2 rounded-xl cursor-pointer hover:bg-gray-900 hover:text-amber-100 transition-all duration-500" onClick={() => setMenu(prev => !prev)}>
          Menu
        </button>
        {
          menu && (<div className="absolute border-2 border-amber-200 h-[13vw] w-[20vw] right-0 mt-3 p-5 rounded-3xl backdrop-blur-2xl">
            <ul className="text-xl text-amber-100 space-y-3">
              <li className="py-2 px-4 bg-amber-200 text-black rounded-md cursor-pointer hover:text-amber-200 hover:bg-gray-900 transition-all duration-300">
                Home
              </li>
              <li className="py-2 px-4 bg-amber-200 text-black rounded-md cursor-pointer hover:text-amber-200 hover:bg-gray-900 transition-all duration-300">
                About
              </li>
              <li className="py-2 px-4 bg-amber-200 text-black rounded-md cursor-pointer hover:text-amber-200 hover:bg-gray-900 transition-all duration-300">
                Contact
              </li>
            </ul>
          </div>)
        }
      </div>
      <button onClick={handleLogout} className="bg-amber-100 border border-black h-full ml-5 px-6 py-2 rounded-xl cursor-pointer hover:bg-gray-900 hover:text-amber-100 transition-all duration-500 ">
        Logout
      </button>
    </div>
  </div>);
}

export default Header;
