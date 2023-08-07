import React from "react";
import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

export default function Card(props) {
  return (
    <div className="w-72 bg-DarkBlue rounded-xl mx-auto group">
      <CardImage itempic={props.itempic} />
      <CardHeader
        itemname={props.itemname}
        iteminfo={props.iteminfo}
        itemprice={props.itemprice}
        itemdate={props.itemdate}
      />
      <hr className="mt-6 border-HardBlue " />
      <CardFooter
        creatorname={props.creatorname}
        creatorpic={props.creatorpic}
      />
    </div>
  );
}
