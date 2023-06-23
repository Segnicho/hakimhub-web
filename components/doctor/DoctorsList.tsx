import React, { useState } from 'react';
import DoctorCard from './DoctorCard';
import { Doctor } from '@/types/hospital';

interface DoctorProps {
  doctors: Doctor[];
  name: string;
}

const DoctorsList: React.FC<DoctorProps> = ({ doctors, name }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const applyFilters = () => {
    // Logic to apply filters and update the doctors list
  };

  return (
    (<div className='mx-6 my-6'>
      <div
        className='flex flex-row items-center justify-between cursor-pointer'
        onClick={toggleFilters}
      >
        <div className='sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl my-2 flex flex-row text-2xl font-bold gap-2'>
          <h3 className='ml-2'>Doctors at</h3>
          <h3 className='text-primary'>{name}</h3>
        </div>
        <div className='flex flex-row gap-2'>
        <h3 className='text-primary'>filter</h3>
        <svg
          className={`sm:w-4 w-6 h-6 ${showFilters ? 'transform rotate-180' : ''}`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
        </div>
        
      </div>
      {showFilters && (
        <div className='flex flex-row items-center space-x-4 mt-4'>
          <div className='relative'>
            <label htmlFor='speciality' className='text-md font-semi-bold text-primary'>
              Speciality
            </label>
            <select
              id='speciality'
              className='block w-40 py-2 px-3 bg-white rounded-md shadow-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              value={selectedSpeciality}
              onChange={(e) => setSelectedSpeciality(e.target.value)}
            >
              <option value=''>All</option>
              <option value='Cardiologist'>Cardiologist</option>
              <option value='Dermatologist'>Dermatologist</option>
              <option value='Gynecologist'>Gynecologist</option>
              <option value='Pediatrician'>Pediatrician</option>
            </select>
          </div>
          <div className='relative'>
            <label htmlFor='university' className='text-md font-semi-bold text-primary'>
              Education
            </label>
            <select
              id='university'
              className='block w-48 py-2 px-3 bg-white rounded-md shadow-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              value={selectedEducation}
              onChange={(e) => setSelectedEducation(e.target.value)}
            >
              <option value=''>All</option>
              <option value='Addis Ababa University'>Addis Ababa University</option>
              <option value='Hawassa University'>Hawassa University</option>
              <option value='Mekelle University'>Mekelle University</option>
              <option value='Jimma University'>Jimma University</option>
              <option value='Bahir Dar University'>Bahir Dar University</option>
            </select>
          </div>
          <div className='relative'>
            <label htmlFor='experience' className='text-md font-semi-bold text-primary'>
              Experience
            </label>
            <select
              id='experience'
              className='block w-40 py-2 px-3 bg-white rounded-md shadow-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
            >
              <option value=''>All</option>
              <option value='0-2 years'>0-2 years</option>
              <option value='3-5 years'>3-5 years</option>
              <option value='6-8 years'>6-8 years</option>
              <option value='8-10 years'>8-10 years</option>
              <option value='10+ years'>10+ years</option>
            </select>
          </div>
        </div>
      )}
      <div className='sm:mx-6 md:mx-16 md:w-3/4  lg:w-4/6 lg:ml-24 xl:w-full xl:-ml-6 2xl:w-full 2xl:-ml-6 flex flex-wrap w-full -mx-3 my-6 overflow-y-scroll h-[700px]'>
        {doctors
          .filter((doctor) => {
            if (selectedSpeciality && doctor.specialities[0].Name !== selectedSpeciality) {
              return false;
            }
            if (selectedExperience && String(doctor.yearsOfExperience) !== selectedExperience) {
              return false;
            }
            return true;
          })
          .map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
      </div>
    </div>)
  );
};

export default DoctorsList;
