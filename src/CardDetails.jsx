import React from "react";

export default function CardDetails(props) {
  return (
    <div className=" flex flex-row  justify-between mt-5">
      <div className="flex flex-row flex-nowrap">
        <img src="../public/icon-ethereum.svg" alt="" className="w-3" />
        <p className="text-Cyan text-sm ml-2 absolute ml-4">
          {props.itemprice}
        </p>
      </div>
      <div className="flex flex-row">
        <img src="../public/icon-clock.svg" alt="" className="w-5" />
        <p className=" text-sm text-SoftBlue min-w-fit ml-2 ">
          {props.itemdate}
        </p>
      </div>
    </div>
  );
}
