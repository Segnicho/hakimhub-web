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
      } max-lg:text-xs max-lg:px-2 max-lg:mb-1 max-lg:mr-1 flex flex-wrap ${
        service.length > 10 ? "m-0 p-1" : "mb-1 mr-1"
      }`}
      onClick={onClick}
    >
      <span
        className={`text-primary text-sm ${
          isSelected ? "hidden" : "bg-white"
        } max-lg:text-xs max-lg:px-2 max-lg:mb-1 max-lg:mr-1 self-center`}
      >
        {"+ "}
      </span>
      {service.length > 15 ? (
        <div className="text-xs self-center pt-1 pl-1 pr-1">
          {service.slice(0, 15)}
          {"..."}
        </div>
      ) : (
        <div className="text-xs self-center pt-1 pl-1 pr-1">{service}</div>
      )}
      <span
        className={`text-primary text-sm ${
          isSelected ? "bg-chip-bg" : "hidden"
        }`}
      >
        {"  x"}
      </span>
    </button>
  );
};

export default FilterChip;
