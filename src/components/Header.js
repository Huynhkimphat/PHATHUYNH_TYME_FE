import React, { useState } from "react";
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
  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center mx-auto max-w-screen-xl gap-y-4">
          <div className="flex items-center order-2">
            <button className="bg-[#DA458F] text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700">
              Connect Wallet
            </button>
          </div>
          <div className="justify-center items-center w-full lg:flex lg:w-auto order-1">
            <ul className="flex mt-4 font-medium lg:space-x-8 lg:mt-0 justify-center flex-wrap">
              {headerData.map((item) => (
                <li key={item.id} >
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
