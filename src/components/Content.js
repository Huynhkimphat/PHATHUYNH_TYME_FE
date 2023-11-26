import React, { useEffect, useState } from "react";
import Product from "./Product";

const tiers = [
  {
    id: 1,
    tierName: "All",
  },
  {
    id: 2,
    tierName: "Legendary",
  },
  {
    id: 3,
    tierName: "Mythic",
  },
  {
    id: 4,
    tierName: "Epic",
  },
  {
    id: 5,
    tierName: "Rare",
  },
  {
    id: 6,
    tierName: "Common",
  },
];

const Content = ({ product }) => {
  const [showAll, setShowAll] = useState(false);
  const [tierActive, setTierActive] = useState(1);
  const [renderData, setRenderData] = useState(product);

  useEffect(() => {
    if (tierActive === 1) {
      setRenderData(product);
      return;
    }

    setRenderData(
      product.filter((data) => {
        return data.tier === tiers[tierActive - 1].tierName;
      })
    );
  }, [tierActive, product]);

  return (
    <div className=" pl-4 w-full lg:w-3/4 flex flex-col items-center justify-center lg:items-start">
      {/* Tag */}
      <div className="flex gap-2 flex-wrap">
        {tiers.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setTierActive(item.id);
            }}
            className={`${
              tierActive === item.id ? "bg-[#DA458F]" : "bg-[#da45907a]"
            } text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-[#DA458F]`}
          >
            {item.tierName}
          </button>
        ))}
      </div>
      {/* Product */}
      <div className="mt-4 flex flex-wrap w-full gap-y-4 sm:gap-y-0 justify-center sm:justify-start min-h-[50vh]">
        {renderData && renderData.length > 0 ? (
          renderData.map((data, index) => (
            <Product key={index} data={data} isHidden={!showAll && index > 7} />
          ))
        ) : (
          <span>OOPS – NO RESULTS</span>
        )}
      </div>
      <div className="flex justify-center items-center mt-4 w-full">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#DA458F] opacity-80 cursor-pointer text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:opacity-100"
        >
          {!showAll ? "Show All" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default Content;
