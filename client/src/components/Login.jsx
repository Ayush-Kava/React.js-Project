import React, { useState } from "react";
import{ useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../api";
import axios from "axios"
import "../main.css";

function Login() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await api.post("/auth/login", { email, password});
            console.log("Response:", response.data);
            if (response.data.success) { 
              navigate("/");
          } else {
              setMessage(response.data.message);
          }
          } catch (error) {
            console.error("Error logging in:", error);  
          }
    }
    
  return (
  
  <div className="h-screen w-full bg-neutral-800 flex justify-center items-center">
    <div className="border-2 w-[40vw] h-auto rounded-2xl border-gray-300 p-8 text-white lg:w-[20vw] lg:h-auto">
      <div className="heading text-center">
        <h2>Login Here!</h2>
        <p className={`text-red-500 transition-all duration-700 ease-in-out ${message ? "opacity-100" : "opacity-0"}`}>{message}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="content flex flex-col mt-3">
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" value={email} required className="bg-gray-300 opacity-80 rounded text-black px-2 " onChange={(e) => setEmail(e.target.value)}  placeholder="Enter the Email"/>

          <label htmlFor="password" className="mt-3">
            Password :
          </label>
          <input type="password" name="password" value={password} required className="bg-gray-300 opacity-80 rounded text-black px-2" onChange={(e) => setPassword(e.target.value)}  placeholder="Enter the password"/>

          <button type="submit" className=" cursor-pointer bg-gray-300 text-black w-20 px-4 py-1 rounded-2xl mt-5 hover:bg-neutral-800 hover:text-white border transition-all duration-599">Submit</button>
          
          <Link to="/register" className="text-gray-600 mt-3.5 hover:text-gray-400 transition-all duration-300">Create account here!</Link>
        </div>
      </form>
    </div>
  </div>);
}

export default Login;
