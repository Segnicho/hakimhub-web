interface FilterChipProps {
  service: string;
  isSelected: boolean;
  onClick: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({
  service,
  isSelected,
  onClick,
}) => {
  return (
    <button
      className={`mr-2 mb-2 px-4 py-1 rounded-full ${
        isSelected
          ? "bg-chip-bg text-primary-text"
          : "bg-white text-primary-text border border-chip-bg"
      } max-lg:text-xs max-lg:px-2 max-lg:mb-1 max-lg:mr-1`}
      onClick={onClick}
    >
      <span
        className={`text-primary text-lg ${isSelected ? "hidden" : "bg-white"} max-lg:text-xs max-lg:px-2 max-lg:mb-1 max-lg:mr-1`}
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
