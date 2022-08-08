import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "./IconComponents/HomeIcon";
import WalletIcon from "./IconComponents/WalletIcon";
import HeartIcon from "./IconComponents/HeartIcon";
import InvoiceIcon from "./IconComponents/InvoiceIcon";
import EnvelopeIcon from "./IconComponents/EnvelopeIcon";

function Navigation() {
  return (
    <div className="w-1/5 h-screen fixed sm:w-1/12 sm:static bg-neutral-100 bg-opacity-50 sm:bg-white">
      <ul className="w-full flex flex-col items-center pt-6">
        <li className="w-full flex justify-center py-4 md:py-6">
          <NavLink
            to="/Food-Delivery"
            className={({ isActive }) =>
              isActive
                ? "w-11 h-11 rounded-full flex justify-center items-center bg-primary shadow-lg cursor-pointer"
                : "w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
            }
            children={({ isActive }) => {
              const color = isActive ? "white" : "black";
              return <HomeIcon className={"h-7 w-7"} fill={color} />;
            }}
          ></NavLink>
        </li>
        <li className="w-full flex justify-center py-4 md:py-6">
          <a
            className={
              "w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
            }
          >
            <WalletIcon className="h-7 w-7 fill-black" />
          </a>
        </li>
        <li className="w-full flex justify-center py-4 md:py-6">
          <a
            className={
              "w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
            }
          >
            <HeartIcon className="h-7 w-7 fill-black" />
          </a>
        </li>
        <li className="w-full flex justify-center py-4 md:py-6">
          <NavLink
            to="/invoice"
            className={({ isActive }) =>
              isActive
                ? "w-11 h-11 rounded-full flex justify-center items-center bg-primary shadow-lg cursor-pointer"
                : "w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
            }
            children={({ isActive }) => {
              const color = isActive ? "white" : "black";
              return <InvoiceIcon className={"h-7 w-7"} fill={color} />;
            }}
          ></NavLink>
        </li>
        <li className="w-full flex justify-center py-4 md:py-6">
          <a
            className={
              "w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
            }
          >
            <EnvelopeIcon className="h-7 w-7 fill-black" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
