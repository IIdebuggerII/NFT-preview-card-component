import React from "react";

export default function CardImage(props) {
  return (
    <div className="relative">
      <img src={props.itempic} className="scale-90 rounded-md  " alt="" />
      <div className="inset-0 opacity-0 scale-90 rounded-md absolute flex z-10 items-center justify-center group-hover:opacity-100 duration-500 transition group-hover:bg-opacity-50 group-hover:bg-Cyan">
        <img
          src="../public/icon-view.svg"
          alt=""
          className="w-16 h-16 	opacity-100"
        />
      </div>
    </div>
  );
}
