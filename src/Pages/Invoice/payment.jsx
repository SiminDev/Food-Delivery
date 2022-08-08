import React from "react";

function Payment() {
  return (
    <div className="w-full bg-secondary-200 rounded-2xl px-5 py-8">
      <p className="text-sm mb-6 text-secondary-500">Card Details</p>
      <CardType />
      <CardInfo />
      <Total />
    </div>
  );
}
export default Payment;

function CardType() {
  return (
    <div className="mb-6">
      <p className="text-xxs text-secondary-500 mb-2">Card type</p>
      <ul className="flex space-x-3">
        <li className="border border-secondary-400 rounded w-16 py-1 px-2">
          <img src={require("../../Assets/Image/VisaCard.svg").default} />
        </li>
        <li className="border border-secondary-300 rounded w-16 py-1 px-2">
          <img src={require("../../Assets/Image/MasterCard.svg").default} />
        </li>
        <li className="border border-secondary-300 rounded w-16 py-1 px-2">
          <img src={require("../../Assets/Image/Paypal.svg").default} />
        </li>
      </ul>
    </div>
  );
}

function CardInfo() {
  return (
    <div className="space-y-5 mb-14">
      <div>
        <label className="text-xxs mb-2 block text-secondary-500">
          Name on card
        </label>
        <input
          className="w-full py-2 px-4 rounded-md bg-secondary-400 text-sm text-secondary-600 focus:outline-none"
          value="John Doe"
        />
      </div>
      <div>
        <label className="text-xxs mb-2 block text-secondary-500">
          Card number
        </label>
        <input
          className="w-full py-2 px-4 rounded-md bg-secondary-400 font-number text-sm text-secondary-600 focus:outline-none"
          value="2076 3345 0080 9011"
        />
      </div>
      <div className="flex justify-between space-x-3">
        <div className="w-full">
          <label className="text-xxs mb-2 block text-secondary-500">
            Expiration date
          </label>
          <input
            className="w-full py-2 px-4 rounded-md bg-secondary-400 font-number text-sm text-secondary-600 focus:outline-none"
            value="09/2024"
          />
        </div>
        <div className="w-full">
          <label className="text-xxs mb-2 block text-secondary-500">CVV</label>
          <input
            className="w-full py-2 px-4 rounded-md bg-secondary-400 font-number text-sm text-secondary-600 focus:outline-none"
            value="1234"
          />
        </div>
      </div>
    </div>
  );
}

function Total() {
  return (
    <div>
      <div className="space-y-2 border-dashed border-b border-secondary-400 mb-3 pb-3">
        <div className="flex justify-between">
          <p className="text-xs text-secondary-500 ">Subtotal</p>
          <p className="font-number text-xs text-secondary-500">
            <span className="text-primary mr-1 text-xxs">$</span>
            {37.61}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs text-secondary-500 ">Shipping</p>
          <p className="font-number text-xs text-secondary-500">
            <span className="text-primary mr-1 text-xxs">$</span>
            {6}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs text-secondary-500 ">tax</p>
          <p className="font-number text-xs text-secondary-500">
            <span className="text-primary mr-1 text-xxs">$</span>
            {3}
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-8">
        <p className="text-sm font-medium text-secondary-600">Total</p>
        <p className="font-number text-secondary-600">
          <span className="text-primary mr-1 font-medium text-xs">$</span>
          {34.61}
        </p>
      </div>
      <button className="bg-primary px-7 py-2 rounded-full text-white text-sm w-full">
        Pay now
      </button>
    </div>
  );
}
