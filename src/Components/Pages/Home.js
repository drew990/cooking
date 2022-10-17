import React from "react";
import Hero from "../Hero";
import About from "../About";
import Steps from "../Steps";
import FoodGen from "../FoodGen";

function Home() {
  return (
    <div>
      <Hero />
      {/* <About /> */}
      <Steps />
      <FoodGen />
    </div>
  );
}

export default Home;
