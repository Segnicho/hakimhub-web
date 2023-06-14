import { Service } from "@/types/services";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Service: React.FC<Service> = ({ image, description, service }) => {
  return (
    <div className="flex flex-col justify-center gap-4 w-[300px] h-[300px] items-center">
      <div className="text-center">{description}</div>
      <div>{<Image src={image} alt={description} />}</div>
      <div className="text-primary-text font-semibold">{service}</div>
    </div>
  );
};

export default Service;