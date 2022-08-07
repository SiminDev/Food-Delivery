import React from "react";

function DebitCard() {
  return (
    <div className="w-full bg-primary h-40 rounded-2xl mb-12">
      <div className="w-full h-full rounded-2xl relative overflow-hidden">
        <img
          className="absolute top-0 left-0"
          src={require("../../Assets/Image/cart_top_vector.svg").default}
        />
        <img
          className="absolute bottom-0 right-0"
          src={require("../../Assets/Image/cart_bottom_vector.svg").default}
        />
        <img
          className="absolute top-5 right-5"
          src={require("../../Assets/Image/VISA.svg").default}
        />
        <img
          className="absolute bottom-10 right-5"
          src={require("../../Assets/Image/Chip.svg").default}
        />
        <p className="text-xxs font-extralight text-white absolute top-5 left-5">
          Debit card
        </p>
        <p className="font-number text-xxs font-extralight text-white absolute bottom-5 right-5">
          9046
        </p>
        <p className="text-xxs font-extralight text-white absolute bottom-14 left-5">
          Total Debit
        </p>
        <p className="font-number text-xl font-light text-white absolute bottom-5 left-5">
          <span className="text-sm font-light text-white mr-0.5">$</span>
          1340.00
        </p>
      </div>
    </div>
  );
}
export default DebitCard;
