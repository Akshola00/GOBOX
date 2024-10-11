import React from "react";
import map from "../app/assets/map.svg";
import Image from "next/image";
import { Roboto, Inter, Poppins } from "next/font/google";
import { Calendar, Clock, LocateIcon } from "lucide-react";

const roboto = Roboto({ weight: ["700", "400"], subsets: ["latin"] });
const inter = Inter({ weight: ["400", "700", "500"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });
const EventAbout = () => {
  return (
    <div>
      <div className={` ${roboto.className} text-normal text-[12px] w-full `}>
        {/* location */}
        Wuhan, China
      </div>

      {/* map */}
      <div className="relative w-[90%] h-auto">
        <Image
          alt="john"
          src={map.src}
          layout="responsive"
          width={500}
          height={400}
          className="h-auto"
        />
      </div>

      <div className={`${inter.className} font-bold text-[18px] leading-5 `}>
        {/* Title */}
        How Using VAs & AI Can Help You Boost Productivity And Close More Deals
      </div>
      <hr />
      {/* date and time */}
      <div className=" w-full flex gap-10">
        <div className="flex flex-1 items-center gap-2 bg--400">
          <p className={` ${inter.className} text-[12px] font-medium`}>
            10th, July, 2020
          </p>
          <Calendar className="text-[#B2A3FF] w-[12px]" />
        </div>
        <div className="flex flex-1 items-center gap-2 bg--400">
          <p className={` ${inter.className} text-[12px] font-medium`}>
            10:00 PM
          </p>
          <Clock className="text-[#B2A3FF] w-[12px]" />
        </div>
      </div>
    </div>
  );
};

export default EventAbout;
