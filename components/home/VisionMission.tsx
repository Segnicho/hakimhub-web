import React from "react";
import { hakimhub } from "@/data/home";

const VisionMission: React.FC = () => {
  return (
    <div className="flex space-x-3 flex-wrap my-10 max-md:flex-col">
      <div className="md:flex-1">
        <h3 className="text-primary text-[40px] font-semibold text-center">
          Mission
        </h3>
        <p className="px-5">{hakimhub.mission}</p>
      </div>
      <div className="md:flex-1">
        <h3 className="text-primary text-[40px] font-semibold text-center">
          Vision
        </h3>
        <p className="px-5">{hakimhub.vision}</p>
      </div>
    </div>
  );
};

export default VisionMission;
