import React from "react";
import { Hamburger } from "./Hamburger";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5">
      <p
        className={`font-bold text-lg leading-3 text-[#27282B] ${inter.className} `}
      >
        e-Ticketing
      </p>
      <Hamburger />
    </div>
  );
};

export default Nav;
