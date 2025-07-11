import React,{useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import LocomotiveScroll from "locomotive-scroll";
import PropertyDetail from "./components/PropertyDetail";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => {
      scroll.destroy();  // Destroy on unmount
    };
    
}, []);


  return (<Router>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/property/:id" element={<PropertyDetail /> } />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  </Router>);
}

export default App;
