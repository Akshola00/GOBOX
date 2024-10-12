import { LocateFixedIcon, LocateIcon, MapIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Poppins, Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import Web3 from "../app/assets/web3.png";
import { Button } from "./ui/button";
import MyAvatarGroup from "./MyAvatarGroup";
// background: linear-gradient(90deg, rgba(200, 219, 255, 0.32) 0%, rgba(120, 131, 153, 0.32) 100%);

const poppins = Poppins({ weight: ["700"], subsets: ["latin"] });
const inter = Inter({ weight: ["700"], subsets: ["latin"] });
const roboto = Roboto({ weight: ["700"], subsets: ["latin"] });

const EventcardHorizontal = () => {
  return (
    <div className="h-[120px] overflow-hidden rounded-xl flex shadow-2xl">
      <div className="flex-1 bg-red-500 ">
        <Image
          className="w-full max-w-[180px] h-full object-cover"
          alt="john"
          src={Web3}
        />
      </div>
      <div className="flex-1 px-2 py-2 flex-col flex gap-1">
        <div className=" flex-col flex gap-1">
          <div className="flex items-center justify-between">
            <p className="font-normal text-[8.53px] text-[#2F3B48] ">
              7th September, 2024
            </p>
            <Button
              className={`bg-gradient-to-r from-[#C8DBFF] to-[#ffffff52] ${inter.className} font-normal text-[7px] text-[#131416]  w-[57px] h-[15px] rounded-xl linea  `}
            >
              Opened
            </Button>
          </div>
          {/* div 2 */}
          <div>
            <p
              className={`text-[#364F6B] ${roboto.className} text-[10px] font-bold leading-4`}
            >
              How Using VAs & AI Can Help You Boost Productivity And Close More
              Deals
            </p>
          </div>
          {/* div 3 */}
          <div className="flex items-center justify-between w-[80%]">
            <div className={` items-center flex gap-2 ${roboto.className} `}>
              <LocateFixedIcon
                width="9px"
                height="9px"
                className="text-[#765BFF]"
              />
              <p
                className={`text-[#765BFF] text-[9px] font-normal ${roboto.className}`}
              >
                Lagos, Nigeria
              </p>
            </div>
            <div className="font-extrabold text-[9px] ">10:00pm</div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-20px">
          <div className="flex gap-3 items-center  w-[155px]  ">
            <MyAvatarGroup size={20} />
            <span
              className={`text-[6px] ${poppins.className} text-center font-normal `}
            >
              10+ Users Attending
            </span>
          </div>
          {/* <div>
            <Button>Opened</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EventcardHorizontal;
