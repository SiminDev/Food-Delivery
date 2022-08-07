import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  return (
    <>
      <h2 className="mb-6">Order Summary</h2>
      <div className="flex flex-col justify-between h-96 pb-6">
        <SummaryList />
        <Total />
      </div>
    </>
  );
}
export default OrderSummary;

function SummaryList() {
  return (
    <ul className="space-y-2.5">
      <li
        key={1}
        className="w-full border border-slate-100 rounded-xl p-3 flex items-center "
      >
        <figure className="w-11 h-11 rounded-full mr-4">
          <img src={require("../../Assets/Image/1.png")} />
        </figure>
        <caption className="flex grow flex-col items-start">
          <p className="text-xs">{"Mixed Pizza"}</p>
          <p className="text-xs font-light font-number flex">
            <img src={require("../../Assets/Icons/Cross.svg").default} /> {2}
          </p>
        </caption>
        <p className="text-sm font-number">
          <span className="text-primary text-xs mr-1 font-medium">$</span>
          {(2 * 13.59).toFixed(2)}
        </p>
      </li>
      <li
        key={2}
        className="w-full border border-slate-100 rounded-xl p-3 flex items-center "
      >
        <figure className="w-11 h-11 rounded-full mr-4">
          <img src={require("../../Assets/Image/2.png")} />
        </figure>
        <caption className="flex grow flex-col items-start">
          <p className="text-xs">{"Mushroom Pizza"}</p>
          <p className="text-xs font-light font-number flex">
            <img src={require("../../Assets/Icons/Cross.svg").default} /> {1}
          </p>
        </caption>
        <p className="text-sm font-number">
          <span className="text-primary text-xs mr-1 font-medium">$</span>
          {(1 * 10.43).toFixed(2)}
        </p>
      </li>
    </ul>
  );
}

function Total() {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <p className="text-sm font-medium">Total</p>
        <p className="font-number">
          <span className="text-primary mr-1 font-medium text-xs">$</span>
          {37.61}
        </p>
      </div>
      <button className="bg-primary px-7 py-2 rounded-full text-white text-sm w-full">
        Checkout
      </button>
    </div>
  );
}
