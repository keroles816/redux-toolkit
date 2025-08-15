import React from "react";
import MeubelLogo from "../assets/Icons/Meubel House_Logos-05.png";
const Home = () => {
  return (
    <div className=" min-w-full h-full">
      <div className="flex flex-row items-center justify-between py-8 px-6">
        <div className="flex justify-center items-center gap-2">
          <img src={MeubelLogo} alt="home logo" />
          <h3 className="font-bold text-4xl font-montserrat">Furniro</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
