import { filter_service } from "@/data/services";
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
    ? filter_service
    : filter_service.slice(0, MAX_SERVICES_TO_SHOW);

  return (
    <div className="lg:block w-1/4 hidden">
      <div className="bg-white rounded-lg justify-end text-primary font-bold p-8 text-lg min-h-full sticky top-[85px]">
        <h3 className="text-primary-text text-xl font-bold mb-6">Filter</h3>
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
             {!showMore && filter_service.length > MAX_SERVICES_TO_SHOW ? (
                <button
                  className="text-primary-text text-sm hover:text-primary cursor-pointer"
                  onClick={() => setShowMore(true)}
                >
                  Show More
                </button>
              ): (
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
