import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const headerData = [
  {
    id: 1,
    name: "HOME",
  },
  {
    id: 2,
    name: "ABOUT US",
  },
  {
    id: 3,
    name: "MARKETPLACE",
  },
  {
    id: 4,
    name: "OUR TEAMS",
  },
  {
    id: 5,
    name: "ROADMAP",
  },
  {
    id: 6,
    name: "WHITEPAPER",
  },
];
const Header = () => {
  const [headerActive, setHeaderActive] = useState(1);
  const [isMenuShow, setIsMenuShow] = useState(false);
  return (
    <header className="p-4 md:p-2">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center mx-auto max-w-screen-xl gap-y-4">
          <div className="flex items-center order-2 gap-x-4">
            <button className="bg-[#DA458F] text-white font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 lg:order-2">
              Connect Wallet
            </button>
            <button
              className="font-medium text-lg hover:bg-[#DA458F] rounded-lg p-2 flex gap-2 justify-center items-center md:hidden "
              onClick={() => setIsMenuShow(!isMenuShow)}
            >
              <RxHamburgerMenu />
              <p>Menu</p>
              {isMenuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          <div
            className={`${
              isMenuShow ? "flex" : "hidden"
            } md:flex md:flex-row flex-col justify-center items-center lg:flex lg:w-auto order-2 lg:order-1 w-full`}
          >
            <ul className="flex flex-col md:flex-row mt-4 font-medium lg:space-x-8 lg:mt-0 justify-center flex-wrap">
              {headerData.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`py-2 pr-4 pl-3 text-white lg:p-0 border-4 border-transparent hover:text-[#DA458F] hover:border-b-[#DA458F] ${
                      item.id === headerActive &&
                      "text-[#DA458F] border-b-[#DA458F] "
                    }`}
                    onClick={() => setHeaderActive(item.id)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
