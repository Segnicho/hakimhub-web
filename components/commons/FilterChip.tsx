import { useState } from "react";

interface FilterProps {
  service: string;
}

const FilterChip: React.FC<FilterProps> = ({ service }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const handleServiceSelection = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const isSelected = selectedServices.includes(service);

  return (
    <button
      className={`mr-2 mb-2 px-6 py-1 rounded-full ${
        isSelected
          ? "bg-chip-bg text-primary-text"
          : "bg-white text-primary-text border border-chip-bg"
      }`}
      onClick={() => handleServiceSelection(service)}
    >
      <span
        className={`text-primary text-lg ${isSelected ? "hidden" : "bg-white"}`}
      >
        {"+ "}
      </span>
      {service}
      <span
        className={`text-primary text-lg ${
          isSelected ? "bg-chip-bg" : "hidden"
        }`}
      >
        {"  x"}
      </span>
    </button>
  );
};

export default FilterChip;
