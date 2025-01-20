import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white">
      <h1 className="text-5xl font-bold mb-4">Jetlag Mitigation Made Simple</h1>
      <p className="text-xl mb-6">
        Input your flight details and get personalized sleep schedules to reduce jetlag.
      </p>
      <Typed
        className="text-2xl font-semibold"
        strings={["Fight Jetlag", "Get Better Sleep", "Arrive Refreshed"]}
        typeSpeed={60}
        backSpeed={70}
        loop
      />
    </div>
  );
};

export default Hero;