import React, { useState } from "react";
import { IoToggle } from "react-icons/io5";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { Range } from "react-range";

const FilterCard: React.FC = () => {
  const [activeRangeValue, setActiveRangeValue] = useState([0, 50]);
  const [rangeOfRangeValue, setRangeOfRangeValue] = useState([0, 100]);

  const handleActiveRangeChange = (values: number[]) => {
    setActiveRangeValue(values);
  };

  const handleRangeOfRangeChange = (values: number[]) => {
    setRangeOfRangeValue(values);
  };

  const toggleSwitch = () => {
    setActiveRangeValue(activeRangeValue[0] === 0 ? [1, 50] : [0, 50]);
  };

  return (
    <div className="text-gray-400">
      <div className="text-2xl font-bold">Filter</div>
      <div className="flex flex-wrap">
        <div className="mr-2">Open now</div>
        <div className="">
          {activeRangeValue[0] > 0 ? (
            <FaToggleOn
              size={24}
              className="text-blue-500"
              onClick={toggleSwitch}
            />
          ) : (
            <FaToggleOff
              size={24}
              className="text-gray-500"
              onClick={toggleSwitch}
            />
          )}
        </div>
      </div>
      <div className="slider-container">
        <div className="slider-caption">
          {activeRangeValue[0]} - {activeRangeValue[1]} year
        </div>
        <div className="slider-wrapper">
          <Range
            values={activeRangeValue}
            min={0}
            max={100}
            step={1}
            onChange={handleActiveRangeChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="h-1 w-full bg-gray-200 rounded-lg"
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="h-4 w-4 bg-blue-500 rounded-full shadow-md"
              />
            )}
          />
        </div>
      </div>
      <div>Services</div>
      <div>chips</div>
      <div>show more</div>
      <div>Within range of</div>
      <div>
        <Range
          values={rangeOfRangeValue}
          min={0}
          max={100}
          step={1}
          onChange={handleRangeOfRangeChange}
          renderTrack={({ props, children }) => (
            <div {...props} className="h-1 w-full bg-gray-200 rounded-lg">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="h-4 w-4 bg-blue-500 rounded-full shadow-md"
            />
          )}
        />
      </div>
      <div>kilometers</div>
    </div>
  );
};

export default FilterCard;
