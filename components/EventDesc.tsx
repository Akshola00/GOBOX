import React from "react";
import MyAvatarGroup from "./MyAvatarGroup";
import { Roboto, Inter, Poppins } from "next/font/google";

const roboto = Roboto({ weight: ["700","400"], subsets: ["latin"] });
const inter = Inter({ weight: ["400", "700", "500"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });
const EventDesc = () => {
  return (
    <div>
      <div>
        <p className={`font-bold ${roboto.className} text-[18px] mb-4`}>
          Description
        </p>
        <p
          className={` ${inter.className} font-normal text-[12px] text-justify `}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
          debitis optio numquam pariatur esse sapiente eos. Fuga, ipsum?
          Voluptates officia dolorum dolores autem officiis quia consequatur
          eligendi numquam. Atque, itaque!
        </p>
        <div className="flex items-center justify-between pr-4 mt-6 mb-6">
          <MyAvatarGroup size={32} />
          <p className={` ${poppins.className} font-normal text-[12px] `}>
            10+ Users Attending
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDesc;
