import React from "react";
import CartIcon from "./IconComponents/CartIcon";

function Sidebar(props) {
  return (
    <div className="w-full bg-white md:w-1/4 p-10 font-body">
      <div className="flex justify-end mb-5">
        <button className="w-9 h-9 rounded-full bg-secondary-100 flex justify-center items-center relative">
          <CartIcon className={"w-6 h-6"} />
          <span className="w-4 h-4 absolute top-1 right-0 flex justify-center items-center rounded-full bg-primary text-white font-number text-xxs">
            {3}
          </span>
        </button>
      </div>
      {props.children}
    </div>
  );
}

export default Sidebar;
