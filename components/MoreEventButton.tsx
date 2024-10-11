import React from "react";
import { Button } from "./ui/button";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["400"], subsets: ["latin"] });

const MoreEventButton = () => {
  return (
    <div className="flex items-center justify-center">
      <Button
        className={`rounded-[74px] w-[80%] bg-transparent border-[1px] border-[#BCBCBC] text-center ${lato.className} text-black text-[13px] `}
      >
        See More Event
      </Button>
    </div>
  );
};

export default MoreEventButton;
///border: 1.09px solid #BCBCBC
