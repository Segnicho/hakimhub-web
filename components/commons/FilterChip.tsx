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
  return (
    <button
      className={`mr-2 mb-2 px-6 py-1 rounded-full ${
        selectedServices.includes(`${ service }`)
          ? "bg-primary text-white"
          : "bg-white text-primary-text border border-primary-text"
      }`}
      onClick={() => handleServiceSelection(`${ service }`)}
    >
      <span
        className={`text-primary text-lg ${
          selectedServices.includes(`${ service }`) ? "hidden" : "bg-white"
        }`}
      >
        {"+ "}
      </span>
      {service}
    </button>
  );
};


export default FilterChip;