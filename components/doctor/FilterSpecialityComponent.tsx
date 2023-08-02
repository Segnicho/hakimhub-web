import { useState } from 'react';
import {MdArrowDropDown} from "react-icons/md"
import FilterChip from '../commons/FilterChip';

export interface Props {
  label: string;
  selected: string[] ;
  values: string[];
  setSpeciality: (value: string) => void
  setSelectedSpeciality: (value: React.SetStateAction<string[]>) => void;
 }

const FilterSpecialityComponent: React.FC<Props> = ({
  label,
  selected,
  values,
  setSelectedSpeciality
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col gap-1 z-50 w-40 sm:w-48">
      <label htmlFor="experience" className="text-xs md:text-base font-semi-bold text-primary">
        {label}
      </label>
      <div className="relative inline-block">
        {isOpen ? 
        <div className='relative'>
          <button
          type="button"
          className="mb-2 w-40 sm:w-48 py-2 px-3 bg-white rounded-md shadow-lg flex-flex-row focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
          onClick={() => setIsOpen(!isOpen)}
        >
        <div className='flex flex-row gap-4 place-content-center items-center'>
        <span>select</span>
      <MdArrowDropDown />
      </div>
        </button>
        <div className="p-1 py-2 border-4 h-[250px] font-normal overflow-y-auto absolute bg-white">
          {values.map((speciality, index) => (
                <FilterChip
                  service={speciality}
                  key={index}
                  isSelected={selected.includes(speciality)}
                  onClick={() =>
                    setSelectedSpeciality((prevSpeciality) =>
                    prevSpeciality.includes(speciality)
                        ? prevSpeciality.filter((s) => s !== speciality)
                        : [...prevSpeciality, speciality]
                    )
                  }
                />
                ))}
              </div>
        </div> : 
        <button
          type="button"
          className="mb-2 w-40 sm:w-48 py-2 px-3 bg-white rounded-md shadow-lg flex-flex-row focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
          onClick={() => setIsOpen(!isOpen)}>
            <div className='flex flex-row gap-4 place-content-center items-center'>
              <span>select</span>
              <MdArrowDropDown />
            </div>
        </button>}
      </div>
    </div>
  );
};

export default FilterSpecialityComponent;
