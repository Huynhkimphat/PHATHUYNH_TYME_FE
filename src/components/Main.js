import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Content from "./Content";
import product from "../assets/data/data.json";

const Main = () => {
  const [data, setData] = useState(product);
  const [reload, setReload] = useState(false);
  const [defaultFilter, setDefaultFilter] = useState({
    productName: "",
    min: 0,
    max: 999999,
    tier: "default",
    priceSort: "default",
  });

  const handleChangeFilter = (filter) => {
    setDefaultFilter(filter);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setData(product);
      setReload(true);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let prepareData = product
      .filter((item) => {
        if (defaultFilter.productName) {
          return (
            item.title
              .toLowerCase()
              .includes(defaultFilter.productName.toLowerCase()) &&
            item.price >= defaultFilter.min &&
            item.price <= defaultFilter.max
          );
        }
        return (
          item.price >= defaultFilter.min && item.price <= defaultFilter.max
        );
      })
      .filter((item) => {
        if (defaultFilter.tier !== "default")
          return item.tier.toLowerCase() === defaultFilter.tier.toLowerCase();
        return item;
      });
    if (defaultFilter.priceSort === "lower") {
      prepareData.sort((a, b) => b.price - a.price);
    } else if (defaultFilter.priceSort === "higher") {
      prepareData.sort((a, b) => a.price - b.price);
    }
    setReload(false);
    setData(prepareData);
  }, [defaultFilter, reload]);
  return (
    <div className="w-full my-16">
      <div
        className="flex flex-wrap justify-between mx-auto max-w-screen-xl"
        id="main"
      >
        <Filter filter={defaultFilter} handleFilter={handleChangeFilter} />
        <Content product={data} />
      </div>
    </div>
  );
};

export default Main;
