import React from "react";
import CardDetails from "./CardDetails";

export default function CardHeader(props) {
  return (
    <div className="px-4">
      <div className="flex flex-col items-start">
        <h6 className="group-hover:text-Cyan cursor-pointer">
          {props.itemname}
        </h6>
      </div>
      <div className="flex flex-col text-start text-SoftBlue font-light mt-2">
        <p>{props.iteminfo}</p>
      </div>
      <CardDetails itemprice={props.itemprice} itemdate={props.itemdate} />
    </div>
  );
}
