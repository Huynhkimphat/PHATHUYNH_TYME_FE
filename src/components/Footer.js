import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdChat } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="my-16 px-4">
      <div className="flex flex-col flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        {/* Footer 1 */}
        <div className="flex flex-col md:flex-row items-center gap-y-8 justify-around w-full">
          <div className="flex items-center md:items-start flex-col">
            <div className="font-bold">NAVIGATION</div>
            <div className="flex flex-wrap mt-4 flex-col md:flex-row gap-y-4">
              <p className="w-full md:w-1/3 cursor-pointer hover:text-[#DA458F] ">
                Home
              </p>
              <p className="w-full md:w-1/3 cursor-pointer hover:text-[#DA458F]">
                About us
              </p>
              <p className="w-full md:w-1/3 cursor-pointer hover:text-[#DA458F]">
                Our teams
              </p>
              <p className="w-full md:w-1/3 cursor-pointer hover:text-[#DA458F]">
                Whitespace
              </p>
              <p className="w-full md:w-1/3 cursor-pointer hover:text-[#DA458F]">
                Marketplace
              </p>
              <p className="w-full md:w-1/3 cursor-pointer hover:text-[#DA458F]">
                Roadmap
              </p>
            </div>
          </div>
          <div className="flex items-center md:items-start flex-col">
            <div className="font-bold">CONTACT US</div>
            <div className="flex flex-col mt-4 justify-start gap-y-2 cursor-pointer">
              <div className="flex gap-2 text-sm items-center justify-center md:justify-start hover:text-[#DA458F]">
                <FaPhone />
                012345678910
              </div>
              <div className="flex gap-2 text-sm items-center justify-center md:justify-start hover:text-[#DA458F]">
                <MdChat />
                tymex-talent@tyme.com
              </div>
            </div>
          </div>
          <div className="flex items-center md:items-start flex-col">
            <div className="font-bold w-full">
              SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
            </div>
            <div className="flex flex-col mt-4 justify-start gap-y-2 cursor-pointer w-full">
              <div className="flex gap-2 text-sm items-center justify-start">
                <input
                  className="bg-transparent p-2 border-2 border-[#ccc] outline-none rounded w-2/3"
                  placeholder="example@gmail.com"
                />
                <button className="bg-[#DA458F] text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-[#c945da]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Break */}
        <hr class="h-px my-8 bg-gray-200 border-0 w-full" />
        {/* Footer 2 */}
        <div className="flex justify-center md:justify-between text-sm mt-2 mx-12 w-[80%]">
          <div>©2023 Tyme - Edit. All Rights reserved.</div>
          <div className="hidden md:flex gap-4">
            <div>Security</div>
            <div>Legal</div>
            <div>Privacy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
