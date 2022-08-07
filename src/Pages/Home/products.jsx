import React from "react";
import PlusIcon from "../../Components/IconComponents/PlusIcon";

function Products() {
  const productsList = [
    {
      id: 1,
      name: "Mixed Pizza",
      image: require("../../Assets/Image/1.png"),
      price: "13.59",
      quantity: 1,
    },
    {
      id: 2,
      name: "Mushroom Pizza",
      image: require("../../Assets/Image/2.png"),
      price: "10.43",
      quantity: 1,
    },
    {
      id: 3,
      name: "Olive Pizza",
      image: require("../../Assets/Image/3.png"),
      price: "8.99",
      quantity: 1,
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="w-full grid grid-cols-3 gap-8">
      {productsList.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between items-center bg-white rounded-2xl shadow-2xl shadow-slate-200 p-5 relative"
        >
          <figure className="w-28 h-28 rounded-full -mt-16 mb-2">
            <img src={item.image} />
          </figure>
          <p className="text-sm font-medium text-left w-full mb-1">
            {item.name}
          </p>
          <p className="text-sm font-number text-left w-full">
            <span className="text-primary text-xs mr-1 font-medium">$</span>
            {item.price}
          </p>
          <button className="w-8 h-8 rounded-full bg-primary absolute bottom-5 right-5 flex justify-center items-center">
            <PlusIcon className={"w-7 h-7 stroke-white"} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
