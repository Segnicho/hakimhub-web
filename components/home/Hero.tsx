import { doctor } from "@/public";
import Image from "next/image";
import React from "react";

const Hero:React.FC = () => {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 font-semibold px-5 mt-6">
      <div className="cols-span-1 justify-center flex flex-col gap-2 text-[40px] md:pl-7 ">
        <span>Making Your </span>
        <span className="text-[40px] font-bold">
          Health <span className="text-primary"> Care</span>
        </span>
        <span>Options Easier <span className="text-primary">&</span> <br /> More Accessible</span>
      </div>
      <div className="cols-span-1 max-sm:hidden">
        <Image src={doctor} alt="doctor and patient" />
      </div>
    </div>
  );
};

export default Hero;
