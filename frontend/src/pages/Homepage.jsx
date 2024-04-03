import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Bakery from './../components/Bakery';

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Bakery/>
    </div>
  )
}

export default Homepage
