import { Calendar, Clock } from "lucide-react";
import React from "react";
import { Roboto, Inter } from "next/font/google";


const roboto = Roboto({ weight: ["700"], subsets: ["latin"] });
const inter = Inter({ weight: ["700"], subsets: ["latin"] });
const EventDetails = () => {
  return (
    <div>
      <div>{/* location */}</div>
      <div>{/* map */}</div>
      <div>{/* Title */}</div>
      <hr />
      {/* date and time */}
      <div>
        <div>
          <p>10th, July, 2020</p>
          <Calendar />
        </div>
        <div>
          <p>10:00 PM</p>
          <Clock />
        </div>
      </div>
      {/* description */}
      <div>
        <p className={`font-bold ${Inter.className} text-[18px]`}>
            Description
        </p>
        <p>

        </p>
      </div>
    </div>
  );
};

export default EventDetails;
