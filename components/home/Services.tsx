import React from "react";
import { services } from "@/data/home";
import { Service } from "@/components";

const Services: React.FC = () => {
  return (
    <div data-testid="services">
      <h3 className="font-bold text-center text-primary-text text-[40px]">
        Services We Provide
      </h3>
      <div className="flex justify-between flex-wrap max-sm:justify-center">
        {services.map((service, index) => (
          <Service
            key={index}
            description={service.description}
            image={service.image}
            service={service.service}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
