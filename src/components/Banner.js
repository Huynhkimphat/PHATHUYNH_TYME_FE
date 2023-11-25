import React from "react";
import NewArrival from "../assets/img/NewArrival.png";
import AssassinBanner from "../assets/img/AssassinBanner.png";
import BasketballBanner from "../assets/img/BasketballBanner.png";
import MafiaBanner from "../assets/img/MafiaBanner.png";
import NeonBanner from "../assets/img/NeonBanner.png";
import TheMainBanner from "../assets/img/TheMainBanner.png";

const Banner = () => {
  return (
    <div className="lg:bg-[#ccc] bg-[#FBC625]">
      <div className="hidden lg:flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-10 px-4">
        <div>
          <img src={NewArrival} alt="" className="w-[70%]" />
        </div>
      </div>
      <div className="w-full bg-[#FBC625]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl mt-4">
          <div className="w-2/3 hidden lg:flex">
            <div className="p-4">
              <img src={AssassinBanner} alt="" />
            </div>
            <div className="p-4">
              <img src={BasketballBanner} alt="" />
            </div>
            <div className="p-4">
              <img src={MafiaBanner} alt="" />
            </div>
            <div className="p-4">
              <img src={NeonBanner} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center ">
            <div className="lg:mt-[-30vh]">
              <img src={TheMainBanner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
