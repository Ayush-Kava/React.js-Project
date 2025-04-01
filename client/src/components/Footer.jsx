import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
  <div className="w-full h-[400px] p-20 grid grid-cols-3 bg-amber-200 rounded-t-4xl">
    <div className="text-3xl p-10 text-[1.2vw]  text-[#28304b]">
      <h1 className=" font-bold text-[1.3vw] text-gray-900 ">About us</h1>
      <p className="mt-5">
        We provide the best real estate deals with top-notch services.
      </p>
    </div>
    <div className=" text-3xl p-10 text-[1.2vw] text-[#28304b]">
      <h1 className=" font-bold text-[1.3vw] text-gray-900 ">Quick link</h1>
      <div className="links flex flex-col gap-3 mt-5">
        <Link to="#">Home</Link>
        <Link to="#">About</Link>
        <Link to="#">Contact</Link>
      </div>
    </div>
    <div className=" p-10">
      <h1 className=" font-bold text-[1.3vw] text-gray-900 ">Follows us</h1>
      <div className="tags flex flex-row gap-3 mt-4">
        <a href="#">
          <i class="fa-brands fa-facebook text-xl"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-twitter text-xl"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-instagram text-xl"></i>
        </a>
      </div>
    </div>
  </div>);
}

export default Footer;