import React, { useState } from 'react';
import  {AiOutlineClose} from "react-icons/ai"
import {MdArrowDropDown} from "react-icons/md"

interface Props {
  label: string;
  selected: string[] ;
  values: string[];
  setSpeciality: (value: string) => void
 }

const FilterSpecialityComponent: React.FC<Props> = ({
  label,
  selected,
  values,
  setSpeciality
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (value : boolean) => {
    setIsOpen(value);
  };

  return (
    <div className="relative flex flex-col gap-1 z-50 w-40 sm:w-48">
      <label htmlFor="experience" className="text-xs md:text-base font-semi-bold text-primary">
        {label}
      </label>
      <div className="relative inline-block">
        <button
          type="button"
          className="mb-2 w-40 sm:w-48 py-2 px-3 bg-white rounded-md shadow-lg flex-flex-row focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          onClick={() => toggleDropdown(!isOpen)}
        >
          {selected.length  ? 
            <div className='flex flex-col gap-1'>
              {selected.map((item, index)=> {
                return <div key={index}  className='flex flex-row gap-1 bg-primary rounded-lg' >
                  <div className='text-xs md:text-base flex flex-row mx-2'>
                  {item}
                  </div>
                  <AiOutlineClose onClick={() => [setSpeciality(item), toggleDropdown(false)]}className='mt-1' />
                </div>
              })}

            </div>

            : <div className='flex flex-row gap-4 place-content-center items-center'>
              <p className='text-xs md:text-base'>select</p>
              <MdArrowDropDown />
              </div>}
        </button>
        <div className={`absolute top-full left-0 w-full max-h-48 overflow-y-scroll bg-white border border-t-0 rounded-b-md ${isOpen ? '' : 'hidden'}`}>
          {values.map((value, index) => (
            <button
              key={index}
              type="button"
              className={`block w-full py-2 px-3 text-left hover:bg-gray-100 snap-y ${ selected.includes(value) ? 'bg-gray-200' : ''}`}
              onClick={() => [setSpeciality(value), toggleDropdown(!isOpen)]}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSpecialityComponent;
