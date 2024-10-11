import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
//background: #765BFF;

const Myserach = () => {
  return (
    <div >
      <p className="font-semibold items-center text-center">
        Find events happening arround you
      </p>

      <div>
        <div className="flex gap-2 items-center justify-center m-4 rounded-full pl-4  bg-[#F8F7FA] ">
          <p>
            <Search width="13px" height="13px" color="black" />
          </p>
          <Input
            className="appearance-none px-6 bg-transparent border-none outline-none focus:outline-none focus:ring-0 p-0 m-0"
            type="search"
            placeholder="Search Events"
          />
          <Button className="rounded-[13px] rounded-tl-none  w-[118px] h-[40px] text-[12px] bg-[#765BFF] ">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Myserach;
