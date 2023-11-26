import React from "react";
const gradientLegendary = "bg-gradient-to-r from-[#FE955A] to-[#F1DA63]";
const gradientMythic = "bg-gradient-to-r from-[#FE5A5A] to-[#F163D2]";
const gradientEpic = "bg-gradient-to-r from-[#DD5AFE] to-[#6366F1]";
const gradientRare = "bg-gradient-to-r from-[#43A6F6] to-[#5868F3]";
const gradientCommon = "bg-gradient-to-r from-[#49DD81] to-[#22B4C6]";

const Product = ({ data, isHidden }) => {
  let gradientColor = gradientCommon;
  switch (data.tier) {
    case "Legendary":
      gradientColor = gradientLegendary;
      break;
    case "Mythic":
      gradientColor = gradientMythic;
      break;
    case "Epic":
      gradientColor = gradientEpic;
      break;
    case "Rare":
      gradientColor = gradientRare;
      break;
    default:
      break;
  }
  return (
    <div className={`pb-2 px-2 w-[80%] scale-60 sm:scale-75 hover:scale-85 sm:hover:scale-95 sm:w-1/2 md:w-1/3 lg:w-1/4 rounded bg-[#3A3841] flex flex-col justify-center items-center hover:font-bold cursor-pointer ${isHidden && 'hidden'}`}>
      {/* img */}
      <div className={`m-2 rounded ${gradientColor}`}>
        <img src={require("../assets/img/" + data.img)} alt="" />
      </div>
      {/* content */}
      <div className="flex items-center justify-between w-full p-2">
        <div>{data.title}</div>
        <div>{data.price} ETH</div>
      </div>
      {/* author */}
      <div className="flex items-center justify-between gap-2 w-full p-2">
        <div className="flex gap-x-2 items-center justify-center">
          <img
            className="w-[20px] h-[20px]"
            src={require("../assets/img/" + data.author.img)}
            alt=""
          />
          <div>{data.author.name}</div>
        </div>
        <div className={`rounded px-2 ${gradientColor}`}>{data.tier}</div>
      </div>
    </div>
  );
};

export default Product;
