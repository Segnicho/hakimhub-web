import { Service as ServiceType } from "@/types/home/services";
import Image from "next/image";
import React from "react";

const Service: React.FC<ServiceType> = ({ image, description, service }) => {
  return (
    <div className="flex flex-col justify-center gap-4 w-[300px] h-[300px] items-center">
      <div className="text-center">{description}</div>
      <div data-testid="service-image">{<Image src={image} alt={description} />}</div>
      <div className="text-primary-text font-semibold">{service}</div>
    </div>
  );
};

export default Service;