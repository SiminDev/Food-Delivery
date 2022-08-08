import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTotal } from "../../Features/cartSlice";

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
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  return (
    <ul className="space-y-2.5">
      {cart.cartItems.map((item) => (
        <li
          key={item.id}
          className="w-full border border-slate-100 rounded-xl p-3 flex items-center "
        >
          <figure className="w-11 h-11 rounded-full mr-4">
            <img src={item.image} />
          </figure>
          <caption className="flex grow flex-col items-start">
            <p className="text-xs">{item.name}</p>
            <p className="text-xs font-light font-number flex">
              <img src={require("../../Assets/Icons/Cross.svg").default} />{" "}
              {item.quantity}
            </p>
          </caption>
          <p className="text-sm font-number">
            <span className="text-primary text-xs mr-1 font-medium">$</span>
            {(item.quantity * item.price).toFixed(2)}
          </p>
        </li>
      ))}
    </ul>
  );
}

function Total() {
  let navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <p className="text-sm font-medium">Total</p>
        <p className="font-number">
          <span className="text-primary mr-1 font-medium text-xs">$</span>
          {cart.cartTotalAmount}
        </p>
      </div>
      <button
        onClick={() => navigate("/invoice")}
        className="bg-primary px-7 py-2 rounded-full text-white text-sm w-full"
      >
        Checkout
      </button>
    </div>
  );
}
