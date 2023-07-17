import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

interface Props {
  label: string;
  selected: string ;
  values: string[];
  onSelectedChange: (value: string) => void;
  
}

const FilterComponent: React.FC<Props> = ({
  label,
  selected,
  onSelectedChange,
  values
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative flex flex-col gap-1 ${label === "Education" ? "z-30":"z-40"}`}>
      <label htmlFor="experience" className="text-xs md:text-base font-semi-bold text-primary">
        {label}
      </label>
      <div className="relative inline-block">
        <button
          type="button"
          className="mb-2 w-40 py-2 px-3 bg-white rounded-md shadow-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          onClick={() => toggleDropdown()}
        >
          {selected  ? selected  : 
              <div className='flex flex-row gap-4 place-content-center items-center'>
              <p className='text-xs md:text-base'>select</p>
              <MdArrowDropDown />
              </div>}
          {label === 'Experience' && selected && " years"}
          
        </button>
        <div className={`absolute top-full left-0 w-full max-h-48 overflow-y-auto bg-white border border-t-0 rounded-b-md ${isOpen ? '' : 'hidden'}`}>
        <button
              type="button"
              className={`block w-full py-2 px-3 text-left hover:bg-gray-100 ${selected === "" ? 'bg-gray-200' : ''}`}
              onClick={() => [onSelectedChange(""),toggleDropdown()]}>
        </button>
        {values.map((value, index) => (
        <button
          key={index}
          type="button"
          className={`block font-light text-sm text-gray-600 w-full py-2 px-3 text-left hover:bg-gray-100 ${selected === value ? 'bg-gray-200' : ''}`}
          onClick={() => [onSelectedChange(value), toggleDropdown()]}>
          {value} {label === 'Experience' && " years"}
        </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
