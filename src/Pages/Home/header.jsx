import React from "react";

function Header() {
  return (
    <>
      <h2 className="mb-6">Food Delivery</h2>
      <div className="w-full h-40 rounded-2xl relative bg-secondary-200 mb-12">
        <div className="w-full h-full rounded-2xl relative overflow-hidden">
          <div className="absolute top-6 left-10 font-body">
            <p className="mb-2 text-secondary-600">Hello John,</p>
            <p className="text-sm font-light text-secondary-500">
              Get free delivery every $20 purchase 🎉
            </p>
            <button className="bg-primary px-7 py-1.5 rounded-full font-light text-white text-sm mt-8">
              Learn More
            </button>
          </div>
          <img
            className="absolute top-0 right-0"
            src={require("../../Assets/Image/vector-top.svg").default}
          />
          <img
            className="absolute -bottom-20 right-36"
            src={require("../../Assets/Image/vector-bottom.svg").default}
          />
        </div>
        <figure className="absolute -bottom-4 right-2">
          <img src={require("../../Assets/Image/delivery.svg").default} />
        </figure>
      </div>
    </>
  );
}

export default Header;
