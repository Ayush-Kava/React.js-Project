import React,{ useState } from "react";
import{ useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1111/auth/register",{firstname, email, password});
      console.log("Response:", response.data);
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("Register failed! Invalid credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (<div className="h-screen w-full bg-neutral-800 flex justify-center items-center">
    <div className="border-2 w-[40vw] h-auto rounded-2xl border-gray-300 p-8 text-white lg:w-[20vw] lg:h-auto">
      <div className="heading text-center">
        <h2>Register Here!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="content flex flex-col mt-3">
          <label htmlFor="firstname">Firstname :</label>
          <input type="text" name="firstname" required value={firstname} className="bg-gray-300 opacity-80 rounded text-black px-2 " onChange={e => setFirstname(e.target.value)} placeholder="Enter the Firstname"/>

          <label htmlFor="email">Email :</label>
          <input type="email" name="email" required value={email} className="bg-gray-300 opacity-80 rounded text-black px-2 " onChange={e => setEmail(e.target.value)} placeholder="Enter the Email"/>

          <label htmlFor="password" className="mt-3">
            Password :
          </label>
          <input type="password" name="password" required value={password} className="bg-gray-300 opacity-80 rounded text-black px-2" onChange={e => setPassword(e.target.value)} placeholder="Enter the password"/>

          <button type="submit" className=" cursor-pointer bg-gray-300 text-black w-20 px-4 py-1 rounded-2xl mt-5 hover:bg-neutral-800 hover:text-white border transition-all duration-599">
            Submit
          </button>

          <Link to="/login" className="text-gray-600 mt-3.5 hover:text-gray-400 transition-all duration-300">
            Already have account!
          </Link>
        </div>
      </form>
    </div>
  </div>);
}

export default Register;
