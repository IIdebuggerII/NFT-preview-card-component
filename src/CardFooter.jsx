import React from "react";

export default function CardFooter(props) {
  return (
    <div className="flex flex-row items-center max-w-fit pb-6 mt-5 px-4">
      <img
        src={props.creatorpic}
        alt=""
        className="w-10 border-2 rounded-full"
      />
      <p className="text-SoftBlue ml-3 font-light">
        Creation of{" "}
        <span className="text-white group-hover:text-Cyan cursor-pointer">
          {props.creatorname}
        </span>
      </p>
    </div>
  );
}
