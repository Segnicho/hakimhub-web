import { services } from "@/data/services";
import FilterChip from "./FilterChip";
import { useState } from "react";

interface FilterProps {
  openStatus: boolean;
  handleOpenStatus: (event: React.ChangeEvent<HTMLInputElement>) => void;
  activeRange: number;
  handleActiveRange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedServices: string[];
  setSelectedServices: (value: React.SetStateAction<string[]>) => void;
}
const FilterCard: React.FC<FilterProps> = ({
  openStatus,
  handleOpenStatus,
  activeRange,
  handleActiveRange,
  setSelectedServices,
  selectedServices,
}) => {
  const [showMore, setShowMore] = useState(false);
  const MAX_SERVICES_TO_SHOW = 6;
  const servicesToShow = showMore
    ? services
    : services.slice(0, MAX_SERVICES_TO_SHOW);

  return (
    <div className="max-lg:w-full p-6 overflow-y-scroll h-[600px] pb-10 inset-x-0 z-10">
      <div className="bg-white rounded-lg justify-end text-primary font-bold pt-0 text-lg min-h-full">
        <div>
          <h3 className="text-primary-text text-xl font-bold mb-6">
            Filter Hospitals
          </h3>
        </div>
        <div className="ml-4">
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              checked={openStatus}
              onChange={handleOpenStatus}
              className="mr-2"
            />
            <label>Open Now</label>
          </div>
          <div className="mb-2">
            <label className="block mb-4">Active For</label>
            <input
              type="range"
              min={0}
              max={50}
              value={activeRange}
              onChange={handleActiveRange}
              className="w-full bg-transparent text-primary"
            />
            <div className="text-primary-text font-normal text-sm flex justify-center">
              {activeRange} Years
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-4">Services</label>
            <div>
              <div className="flex flex-wrap font-normal">
                {servicesToShow.map((service, index) => (
                  <FilterChip
                    service={service}
                    key={index}
                    isSelected={selectedServices.includes(service)}
                    onClick={() =>
                      setSelectedServices((prevServices) =>
                        prevServices.includes(service)
                          ? prevServices.filter((s) => s !== service)
                          : [...prevServices, service]
                      )
                    }
                  />
                ))}
              </div>
              <div className="flex flex-wrap justify-center">
                {!showMore && services.length > MAX_SERVICES_TO_SHOW ? (
                  <button
                    className="text-primary-text text-sm hover:text-primary cursor-pointer"
                    onClick={() => setShowMore(true)}
                  >
                    Show More
                  </button>
                ) : (
                  <button
                    className="text-primary-text text-sm hover:text-primary cursor-pointer"
                    onClick={() => setShowMore(false)}
                  >
                    Show Less
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
