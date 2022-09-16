import React, { useEffect } from "react";
import "./Category.css";
import { categories } from "../data/data.js";

function Category() {

  console.log(categories);
  return (
    <>
      <div className="category_ctr">
        <div className="category_txt">
          <h1>Choose Services</h1>
        </div>
        <div className="category_data_ctr">
          {categories.map((item) => {
            return (<>
            <div className="hero_box">
            <div className="category_data_text">{item.name}</div>
                <div className="category_data_img">
                    <img src={item.image} alt="" />
                </div>
            </div>
                
            </>);
          })}
        </div>
      </div>
    </>
  );
}

export default Category;
