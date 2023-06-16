import React, { useState } from "react";

const FilterCard: React.FC = () => {
  const [openNow, setOpenNow] = useState(false);
  const [activeRange, setActiveRange] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [withinRange, setWithinRange] = useState(10);

  const handleServiceSelection = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

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
            <button
              className={`mr-2 mb-2 px-6 py-1 rounded-full ${
                selectedServices.includes("Oncologists")
                  ? "bg-primary text-white"
                  : "bg-white text-primary-text border border-primary-text"
              }`}
              onClick={() => handleServiceSelection("Oncologists")}
            >
              <span className="text-primary text-lg">+ </span>Oncologists
            </button>
            <button
              className={`mr-2 mb-2 px-6 py-1 rounded-full ${
                selectedServices.includes("Lab")
                  ? "bg-primary text-white"
                  : "bg-white text-primary-text border border-primary-text"
              }`}
              onClick={() => handleServiceSelection("Lab")}
            >
              <span className="text-primary text-lg">+ </span>Lab
            </button>
            <button
              className={`mr-2 mb-2 px-6 py-1 rounded-full ${
                selectedServices.includes("Emergency")
                  ? "bg-primary text-white"
                  : "bg-white text-primary-text border border-primary-text"
              }`}
              onClick={() => handleServiceSelection("Emergency")}
            >
              <span className="text-primary text-lg">+ </span>Emergency
            </button>

            <button
              className={`mr-2 mb-2 px-6 py-1 rounded-full ${
                selectedServices.includes("Allergist")
                  ? "bg-primary text-white"
                  : "bg-white text-primary-text border border-primary-text"
              }`}
              onClick={() => handleServiceSelection("Allergist")}
            >
              <span className="text-primary text-lg">+ </span>Allergist
            </button>
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
