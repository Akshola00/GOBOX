import React from "react";
import { Input } from "@/components/ui/input";
import { Roboto, Inter, Poppins, Lato } from "next/font/google";
import { Button } from "./ui/button";

const roboto = Roboto({ weight: ["700", "400"], subsets: ["latin"] });
const lato = Lato({ weight: ["700", "400"], subsets: ["latin"] });
const inter = Inter({ weight: ["400", "700", "500"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

const RegisterEvent = () => {
  return (
    <div className="w-full my-4 flex flex-col gap-4 border-2 p-4">
      <p className={`${poppins.className} text-[14px]`}>Register Event</p>
      <Input type="email" placeholder="Email" />
      <div className="w-full flex items-center justify-center">
        <Button
          className={` ${lato.className} text-center items-center bg-[#765BFF] h-[50px] w-[90%] rounded-[73px]  `}
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default RegisterEvent;
