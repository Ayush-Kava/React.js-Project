import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (<Router>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  </Router>);
}

export default App;
