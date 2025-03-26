import React from "react";

function Header() {
  return (
  <div className="w-full h-[5vw] sticky top-0 z-50 bg-[rgb(255,255,255)] rounded-b-4xl flex flex-row justify-between gap-10 items-center">
    <div className="logo h-full ">
      <img src="/images/logo.png" alt="Logo" className="h-full w-full object-cover"/>
    </div>
    <div className="search h-1/2 items-center w-1/3 relative">
      <input type="text" placeholder="Enter the price" className="h-full w-full text-xl bg-[#f2ecff] rounded-4xl focus:outline-none focus:border-2 focus:border-gray-300 px-5"/>
      <button type="submit" className="absolute inset-y-0 right-0 flex items-center px-5 text-gray-800 cursor-pointer hover:text-gray-300">
        <i className="fa-solid fa-magnifying-glass px-1 text-base sm:text-lg md:text-xl"></i>
      </button>
    </div>
    <div className="right h-auto mr-5 ">
        <button className=" bg-amber-100 border border-black h-full ml-5 px-6  py-2 rounded-xl cursor-pointer hover:bg-gray-900 hover:text-amber-100 transition-all duration-500">
            Menu
        </button>
        <button className="bg-amber-100 border border-black h-full ml-5 px-6 py-2 rounded-xl cursor-pointer hover:bg-gray-900 hover:text-amber-100 transition-all duration-500 ">
            Logout
        </button>
    </div>
  </div>);
}

export default Header;
