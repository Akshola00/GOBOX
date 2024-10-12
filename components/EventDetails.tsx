import React from "react";
import GetTicketButton from "./GetTicketButton";

import EventDesc from "./EventDesc";
import RegisterEvent from "./RegisterEvent";
import EventAbout from "./EventAbout";

const EventDetails = () => {
  return (
    <div className="m-4 p-4 flex flex-col gap-3 items-center justify-center">
        <EventAbout />
      {/* description */}
     <EventDesc />
     
      <GetTicketButton />
    </div>
  );
};

export default EventDetails;
