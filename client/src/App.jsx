import { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/auth/api").then((res) => setMessage(res.data.message));
  }, []);

  return <h1 className="bg-red-500 font-black flex justify-center ">{message}</h1>;
}

export default App;
