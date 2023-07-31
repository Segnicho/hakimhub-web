import { doctor } from "@/public";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      data-testid="hero"
      className="flex flex-row justify-between font-semibold font-poppins"
    >
      <div className="cols-span-1 justify-center flex flex-col max-md:text-3xl text-[50px] ">
        <h1>Making Your</h1>
        <span className="font-bold text-[60px] max-md:my-2 md:text-[80px] ">
          Health<span className="text-primary">Care</span>
        </span>
        <h1>Options More Accessible</h1>
      </div>
      <div className="max-md:hidden">
        <Image src={doctor} alt="doctor and patient" />
      </div>
    </div>
  );
};

export default Hero;
