interface FilterChipProps {
  service: string;
  isSelected: boolean;
  onClick: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({ service, isSelected, onClick }) => {
  return (
    <button
      className={`mr-2 mb-2 px-6 py-1 rounded-full ${
        isSelected
          ? "bg-chip-bg text-primary-text"
          : "bg-white text-primary-text border border-chip-bg"
      }`}
      onClick={onClick}
    >
      <span className={`text-primary text-lg ${isSelected ? "hidden" : "bg-white"}`}>
        {"+ "}
      </span>
      {service}
      <span className={`text-primary text-lg ${isSelected ? "bg-chip-bg" : "hidden"}`}>
        {"  x"}
      </span>
    </button>
  );
};

export default FilterChip;
