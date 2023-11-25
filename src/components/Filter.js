import React, { useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";

const Filter = ({ filter, handleFilter }) => {
  const productText = useRef(filter.productName);
  const [min, setMin] = useState(filter.min);
  const [max, setMax] = useState(filter.max);
  const [tier, setTier] = useState("default");
  const [priceSort, setPriceSort] = useState(filter.priceSort);

  const resetFilter = () => {
    productText.current.value = "";
    setMin(0);
    setMax(999999);
    setTier("default");
    setPriceSort("default");
  };
  const handleSearch = () => {
    const filterData = {
      productName: productText.current.value,
      min: min,
      max: max,
      tier: tier,
      priceSort: priceSort,
    };
    handleFilter(filterData);
  };

  return (
    <div className="flex-col gap-y-4 w-1/4 hidden lg:flex p-2">
      <div className="border-2 border-[#ccc] hover:text-[#DA458F]  hover:border-[#DA458F] flex gap-2 items-center justify-center p-2 rounded">
        <LuSearch />
        <input
          type="text"
          ref={productText}
          className="bg-transparent	border-none outline-none"
        />
      </div>
      <div className="hover:text-[#DA458F] rounded border-2 px-2 flex justify-center items-center hover:border-[#DA458F]">
        <span>Min</span>
        <input
          type="text"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          class="bg-transparent p-2 outline-none border-2 border-none w-2/3"
        />
        <span>ETH</span>
      </div>
      <div className="hover:text-[#DA458F] rounded border-2 px-2 flex justify-center items-center hover:border-[#DA458F]">
        <span>Max</span>
        <input
          type="text"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          class="bg-transparent p-2 outline-none border-2 border-none w-2/3"
        />
        <span>ETH</span>
      </div>
      <div className="hover:text-[#DA458F] border-2 flex gap-2 justify-around items-center rounded hover:border-[#DA458F]">
        <select
          class="p-2 rounded-lg w-full bg-gray-50  dark:bg-black outline-none border-none"
          value={tier}
          onChange={(e) => {
            setTier(e.target.value);
          }}
        >
          <option selected value="default">
            Choose a tier
          </option>
          <option value="legendary">Legendary</option>
          <option value="mythic">Mythic</option>
          <option value="epic">Epic</option>
          <option value="rare">Rare</option>
          <option value="common">Common</option>
        </select>
      </div>
      <div className="hover:text-[#DA458F] rounded border-2 flex gap-2 justify-around items-center hover:border-[#DA458F]">
        <select
          class="p-2 rounded-lg w-full bg-gray-50  dark:bg-black outline-none border-none"
          value={priceSort}
          onChange={(e) => {
            setPriceSort(e.target.value);
          }}
        >
          <option selected value="default">
            Choose a price sort
          </option>
          <option value="higher">Low to High</option>
          <option value="lower">High to Low</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={resetFilter}
          className="flex justify-center items-center text-[#da4590b8] gap-x-2  hover:text-[#DA458F]"
        >
          <IoCloseCircle />
          Reset Filter
        </button>
        <button
          onClick={handleSearch}
          className="bg-[#DA458F] text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-[#c945da]"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
