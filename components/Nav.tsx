import React from "react";
import { Hamburger } from "./Hamburger";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5">
      <p
        className={`font-bold text-lg leading-3 text-[#27282B] ${inter.className} `}
      >
        <Link href="/">
        e-Ticketing
        </Link>
      </p>
      <Hamburger />
    </div>
  );
};

export default Nav;
