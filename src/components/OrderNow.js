import React from "react";
import "./OrderNow.css";
function OrderNow() {
  return (
    <>
      <div className="ordr_ctr">
        <div className="ordr_bx1">
          <div className="ordr_txt">
            <h1>Sun's Out, BOGO's Out</h1>
            <p>Through 8/26</p>
          </div>
          <button className="ordr_btn">Order Now</button>
        </div>
        <div className="ordr_bx2">
        <div className="ordr_txt">
            <h1>New Restaurants</h1>
            <p>Added Daily</p>
          </div>
          <button className="ordr_btn">Order Now</button>
        </div>
        <div className="ordr_bx3">
        <div className="ordr_txt">
            <h1>We Deliver Desserts Too</h1>
            <p>Tasty Treats</p>
          </div>
          <button className="ordr_btn">Order Now</button>
        </div>
      </div>
    </>
  );
}

export default OrderNow;
