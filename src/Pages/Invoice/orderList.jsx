import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreseCart,
  addToCart,
  removeFromCart,
  getTotal,
} from "../../Features/cartSlice";
import TrashIcon from "../../Components/IconComponents/TrashIcon";
import PlusIcon from "../../Components/IconComponents/PlusIcon";
import MinusIcon from "../../Components/IconComponents/MinusIcon";

function OrderList() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <>
      <h2 className="mb-6">Order List</h2>
      <p className="text-sm text-slate-400 mb-16">
        You have {cartTotalQuantity} items in your cart
      </p>
      <ListItems />
    </>
  );
}

export default OrderList;

function ListItems() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const handleDecrese = (cartItem) => {
    dispatch(decreseCart(cartItem));
  };

  const handleIncrese = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <ul className="space-y-2.5">
      {cart.cartItems.map((item) => (
        <li
          key={item.id}
          className="w-full bg-white border border-slate-100 rounded-xl py-3 px-6 flex items-center justify-between"
        >
          <figure className="w-14 h-14 rounded-full mr-10">
            <img src={item.image} />
          </figure>
          <p className="basis-2/5 text-slate-500 text-sm">{item.name}</p>
          <div className="flex items-center basis-1/5">
            <button onClick={() => handleIncrese(item)}>
              <PlusIcon className={"w-5 h-5 stroke-slate-500 cursor-pointer"} />
            </button>
            <span className="w-6 h-6 font-number text-xs text-slate-500 font-light block border border-slate-200 rounded-md flex justify-center items-center mx-1">
              {item.quantity}
            </span>
            <button onClick={() => handleDecrese(item)}>
              <MinusIcon
                className={"w-5 h-5 stroke-slate-500 cursor-pointer"}
              />
            </button>
          </div>
          <p className="font-number basis-1/5">
            <span className="text-primary text-xs mr-1 font-medium">$</span>
            {(item.quantity * item.price).toFixed(2)}
          </p>
          <button onClick={() => handleRemoveFromCart(item)}>
            <TrashIcon className={"w-5 h-5 cursor-pointer"} />
          </button>
        </li>
      ))}
    </ul>
  );
}
