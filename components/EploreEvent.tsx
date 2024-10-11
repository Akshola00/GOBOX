import React from "react";
import { Button } from "./ui/button";
import Explore from "../app/assets/explore.svg";
const EploreEvent = () => {
  return (
    <div
      className="flex bg-[#765BFF0A]  flex-col items-center justify-center     
      "
      style={{
        backgroundImage: `url(${Explore.src})`, // Use Explore.src to get the path to the SVG
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col p-8 gap-3 items-center justify-center">
        <div className="flex flex-col gap-3  items-center justify-between">
          <p className="font-extrabold text-[18px] text-center leading-6 p-1">
            SECURE YOUR SPOT AT THE NEXT BIG EVENT!
          </p>
          <p className="font-normal text-[12px] text-center">
            Explore events, book your spot, and receive a unique ticket—-all
            powered by blockchain technology.
          </p>
        </div>
        <Button className=" w-[109.85px] bg-[#0A0A0B] h-[31.63px] rounded-[50.61px] text-[10px]">
          EXPLORE EVENTS
        </Button>
      </div>
    </div>
  );
};

export default EploreEvent;

// name suggestion for an e ticketing app
