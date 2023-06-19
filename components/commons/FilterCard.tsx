import React, { useState } from "react";
import FilterChip from "./FilterChip";

const services = ["Oncologists", "Lab", "Emergency", "Allergist"];

const FilterCard: React.FC = () => {
  const [openNow, setOpenNow] = useState(false);
  const [activeRange, setActiveRange] = useState(0);

  const [withinRange, setWithinRange] = useState(10);

  return (
    <div className="bg-white rounded-lg justify-end text-primary font-bold p-8 text-lg min-h-full">
      <h3 className="text-primary-text text-xl font-bold mb-6">Filter</h3>

      <div className="ml-4">
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            checked={openNow}
            onChange={(e) => setOpenNow(e.target.checked)}
            className="mr-2"
          />
          <label>Open Now</label>
        </div>

        <div className="mb-2">
          <label className="block mb-4">Active For</label>
          <input
            type="range"
            min={0}
            max={30}
            value={activeRange}
            onChange={(e) => setActiveRange(parseInt(e.target.value))}
            className="w-full bg-transparent text-primary"
          />
          <div className="text-primary-text font-normal text-sm flex justify-center">
            {activeRange} Years
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-4">Services</label>
          <div className="flex flex-wrap font-normal">
            {services.map((service, index) => (
              <FilterChip service={service} key={index}/>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="block mb-4">Within Range</label>
          <input
            type="range"
            min={0}
            max={50}
            value={withinRange}
            onChange={(e) => setWithinRange(parseInt(e.target.value))}
            className="w-full text-primary"
          />
          <div className="text-primary-text font-normal text-sm flex justify-center">
            {withinRange} KM
          </div>
        </div>

        {/* Apply filter button */}
        <button className="bg-primary text-white px-4 py-2 rounded-full">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
