import React from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";

function Navbar() {
  return (
    <>
      <div className="nav_ctr">
        <div className="nav_lft">
          <div className="d_inline">
            <AiOutlineMenu size={"2rem"} />
            <h1>
              Food <span className="bold_span">Bae</span>
            </h1>
            <div className="dlivry_pckup">
              <button className="btn_d">Delivery</button>
              <button className="btn_p">Pickup</button>
            </div>
          </div>
        </div>
        <div className="nav_mdl">
          <div className="search">
            <div className="search_icon">
              <BiSearchAlt2 size={"1.4rem"} />
            </div>
            <input type="text" name="" id="" placeholder="Search foods" />
          </div>
        </div>
        <div className="nav_rght">
          <div className="cart">
            <button className="cart_btn">
              <BsFillCartFill size={"1.2rem"} /> Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
