import React, { useState } from "react";
import "./Fetchdata.css";
import { data } from "../data/data.js";
function Fetchdata() {
  const [foods, setFoods] = useState(data);
  // filtering food category
  const filterFood = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  // filtering food price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  // console.log(foods);

  return (
    <>
      <div className="fetch_ctr">
        <h1>Our Dishes</h1>
        <div className="filter_bx">
          <div className="filter_dishes">
            <p>Filter Types</p>
            <button onClick={() => setFoods(data)}>All</button>
            <button onClick={() => filterFood("burger")}>Burgers</button>
            <button onClick={() => filterFood("pizza")}>Pizza</button>
            <button onClick={() => filterFood("salad")}>Salads</button>
            <button onClick={() => filterFood("chicken")}>Chicken</button>
          </div>
          <div className="filter_price">
            <p>Filter Price</p>
            <button onClick={() => filterPrice("$")}>$</button>
            <button onClick={() => filterPrice("$$")}>$$</button>
            <button onClick={() => filterPrice("$$$")}>$$$</button>
            <button onClick={() => filterPrice("$$$$")}>$$$$</button>
          </div>
        </div>
        <div className="product">
          {foods.map((data) => {
            return (
              <div className="product_dta_ctr">
                <div className="image">
                  <img src={data.image} alt="" />
                </div>
                <div className="detail">
                  <div className="product_nme">
                    <p>{data.name}</p>
                  </div>
                  <div className="pr_btn">
                    <button>{data.price}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Fetchdata;
