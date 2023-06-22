import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FilterChip from "./FilterChip";
import { filter_service } from "@/data/services";

const FilterCard: React.FC = () => {
  const router = useRouter();
  const [openNow, setOpenNow] = useState(false);
  const [activeRange, setActiveRange] = useState(0);

  useEffect(() => {
    const queryParams = new URLSearchParams();
    queryParams.set("openNow", String(openNow));
    queryParams.set("activeRange", String(activeRange));
    router.push({ query: queryParams.toString() });
  }, [openNow, activeRange]);

  return (
    <div className="bg-white rounded-lg justify-end text-primary font-bold p-8 text-lg min-h-full sticky top-[85px]">
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
            max={10}
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
            {filter_service.map((service, index) => (
              <FilterChip service={service} key={index} />
            ))}
          </div>
        </div>
        <button className="bg-primary text-white px-4 py-1 rounded-full">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
