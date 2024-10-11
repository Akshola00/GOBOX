import React from "react";
import Link from "next/link";

import { Inter } from "next/font/google";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const Mysidebar = () => {
  return (
    <div className="flex flex-col h-screen">
      
        <nav className={`flex-1 flex flex-col items-start justify-center gap-14 ${inter.className} font-medium text-[17px] `}>
            <ul>
              <Link href="/">FIND EVENT  </Link>
            </ul>
            <ul>
              <Link href="/">CREATE EVENT</Link>
            </ul>
            <ul>
              <Link href="/">MY TICKET</Link>
            </ul>
        </nav>
      
      <div className="flex-1 flex items-center justify-center">

        <Button className={`font-medium bg-[#765BFF] text-[11px] w-[158.85px] h-[38.4px] gap-2 rounded-[88px] ${inter.className} `} >
          CONNECT WALLET <ArrowRight width="11px" height="10px" />
        </Button>
      </div>
    </div>
  );
};

export default Mysidebar;
