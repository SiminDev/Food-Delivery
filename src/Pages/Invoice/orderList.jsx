import React from "react";
import { useEffect } from "react";
import TrashIcon from "../../Components/IconComponents/TrashIcon";
import PlusIcon from "../../Components/IconComponents/PlusIcon";
import MinusIcon from "../../Components/IconComponents/MinusIcon";

function OrderList() {
  return (
    <>
      <h2 className="mb-6">Order List</h2>
      <p className="text-sm text-slate-400 mb-16">
        You have {3} items in your cart
      </p>
      <ListItems />
    </>
  );
}

export default OrderList;

function ListItems() {
  return (
    <ul className="space-y-2.5">
      <li
        key={1}
        className="w-full bg-white border border-slate-100 rounded-xl py-3 px-6 flex items-center justify-between"
      >
        <figure className="w-14 h-14 rounded-full mr-10">
          <img src={require("../../Assets/Image/1.png")} />
        </figure>
        <p className="basis-2/5 text-slate-500 text-sm">{"Mixed Pizza"}</p>
        <div className="flex items-center basis-1/5">
          <button>
            <PlusIcon className={"w-5 h-5 stroke-slate-500 cursor-pointer"} />
          </button>
          <span className="w-6 h-6 font-number text-xs text-slate-500 font-light block border border-slate-200 rounded-md flex justify-center items-center mx-1">
            {2}
          </span>
          <button>
            <MinusIcon className={"w-5 h-5 stroke-slate-500 cursor-pointer"} />
          </button>
        </div>
        <p className="font-number basis-1/5">
          <span className="text-primary text-xs mr-1 font-medium">$</span>
          {(2 * 13.59).toFixed(2)}
        </p>
        <button>
          <TrashIcon className={"w-5 h-5 cursor-pointer"} />
        </button>
      </li>
      <li
        key={2}
        className="w-full bg-white border border-slate-100 rounded-xl py-3 px-6 flex items-center justify-between"
      >
        <figure className="w-14 h-14 rounded-full mr-10">
          <img src={require("../../Assets/Image/1.png")} />
        </figure>
        <p className="basis-2/5 text-slate-500 text-sm">{"Mushroom Pizza"}</p>
        <div className="flex items-center basis-1/5">
          <button>
            <PlusIcon className={"w-5 h-5 stroke-slate-500 cursor-pointer"} />
          </button>
          <span className="w-6 h-6 font-number text-xs text-slate-500 font-light block border border-slate-200 rounded-md flex justify-center items-center mx-1">
            {1}
          </span>
          <button>
            <MinusIcon className={"w-5 h-5 stroke-slate-500 cursor-pointer"} />
          </button>
        </div>
        <p className="font-number basis-1/5">
          <span className="text-primary text-xs mr-1 font-medium">$</span>
          {(1 * 10.43).toFixed(2)}
        </p>
        <button>
          <TrashIcon className={"w-5 h-5 cursor-pointer"} />
        </button>
      </li>
    </ul>
  );
}
