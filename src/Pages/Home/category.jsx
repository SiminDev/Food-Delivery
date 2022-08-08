import React from "react";
import ArrowIcon from "../../Components/IconComponents/ArrowIcon";

function Category() {
  const categoryList = [
    { id: 1, name: "Burger", icon: "🍔" },
    { id: 2, name: "Hotdog", icon: "🌭" },
    { id: 3, name: "Asian", icon: "🍜" },
    { id: 4, name: "Pasta", icon: "🍝" },
    { id: 5, name: "Salad", icon: "🥗" },
    { id: 6, name: "Drink", icon: "🍺" },
    { id: 7, name: "Desser", icon: "🍨" },
  ];
  return (
    <>
      <h2 className="mb-6">Menu Category</h2>
      <div className="flex justify-between items-center mb-28">
        <ul className="grid grid-cols-8 gap-5">
          <li className="bg-primary rounded-full h-28 flex flex-col justify-around items-center pb-3 ">
            <span className="w-12 h-12 bg-white rounded-full block flex justify-center items-center text-2xl">
              🍕
            </span>
            <p className="text-xs font-light text-white">Pizza</p>
          </li>
          {categoryList.map((item) => (
            <li
              key={item.id}
              className="bg-white shadow-2xl shadow-slate-200 rounded-full w-16 h-28 flex flex-col justify-around items-center pb-3 "
            >
              <span className="w-12 h-12 bg-white border border-slate-100 rounded-full block flex justify-center items-center text-2xl">
                {item.icon}
              </span>
              <p className="text-xs font-light">{item.name}</p>
            </li>
          ))}
        </ul>
        <button className="w-9 h-9 rounded-full bg-secondary-200 flex justify-center items-center">
          <ArrowIcon className={"w-3 h-3"} />
        </button>
      </div>
    </>
  );
}
export default Category;
