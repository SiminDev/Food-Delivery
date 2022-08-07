import React from "react";

function Content(props) {
  return (
    <div className="w-full bg-secondary-100 p-12 md:w-2/3 font-body">
      {props.children}
    </div>
  );
}

export default Content;
