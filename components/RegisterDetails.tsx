import React from "react";
import EventAbout from "./EventAbout";
import EventDesc from "./EventDesc";
import GetTicketButton from "./GetTicketButton";
import RegisterEvent from "./RegisterEvent";

const RegisterDetails = () => {
  return (
    <div>
      <div className="m-4 p-4 flex flex-col gap-3 items-center justify-center">
        <EventAbout />
        {/* description */}
        <RegisterEvent />

        
      </div>
    </div>
  );
};

export default RegisterDetails;
