import React, { useState } from 'react';
import DoctorCard from './DoctorCard';
import { useFilterDoctorsQuery } from '@/store/doctors/doctors-api';
import { AllEducationalInstitutions } from '@/types/institution/institution-detail';
import DoctorFilter from './DoctorFilter';
import ErrorCard from '@/components/commons/ErrorCard';

interface DoctorsListProps {
  hospitalId: string;
  name: string;
  allSpecialities: string[];
  allEducationalInstitutions: AllEducationalInstitutions[];
}

const DoctorsList: React.FC<DoctorsListProps> = ({
  hospitalId,
  name,
  allSpecialities,
  allEducationalInstitutions,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState<string[]>([]);

  const setSpeciality = (speciality: string) => {
    setSelectedSpeciality(() => {
      const isSpecialitySelected = selectedSpeciality.includes(speciality);
      if (isSpecialitySelected) {
        // Remove the speciality if it already exists
        return selectedSpeciality.filter((item) => item !== speciality);
      } else {
        // Add the speciality if it doesn't exist
        return [...selectedSpeciality, speciality];
      }
    });
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const { data: filteredDoctors, error } = useFilterDoctorsQuery({
    hospitalId: hospitalId,
    speciality: selectedSpeciality,
    education: selectedEducation,
    experience: selectedExperience,
  });

  return (
    <div className="my-5 mx-6 sm:mx-8 sm:my-8">
      <div
        className="flex flex-row cursor-pointer justify-between"
        onClick={toggleFilters}
      >
        {/* <div className="sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl my-2 flex flex-row text-2xl font-bold gap-2"> */}
        <div className='text-xs md:text-lg lg:text-xl flex flex-row '>
          <h3 className="font-bold">Doctors at<span className="text-primary ml-1">{name}</span></h3>
        </div>
        <div className="flex flex-row gap-2">
          <h3 className="text-xs md:text-lg text-primary">filter</h3>
          <svg
            className={`w-2 h-4 md:w-4 md:h-6${showFilters ? 'transform rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {showFilters && (
        <DoctorFilter
          allSpecialities={allSpecialities}
          allEducationalInstitutions={allEducationalInstitutions}
          selectedSpeciality={selectedSpeciality}
          selectedEducation={selectedEducation}
          selectedExperience={selectedExperience}
          onSpecialityChange={setSelectedSpeciality}
          onEducationChange={setSelectedEducation}
          onExperienceChange={setSelectedExperience}
          setSpeciality = {setSpeciality}
        />
      )}
      {error ? (
        <div>
        <ErrorCard />
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center my-6 overflow-y-auto h-[360px] mx-6 sm:h-[500px] md:h-[520px] lg:mx-4 lg:justify-start ">
          {filteredDoctors?.value && filteredDoctors?.value.length > 0 ? (
            filteredDoctors?.value.map((filterdoctor, index) => (
              <DoctorCard key={index} doctor={filterdoctor}/>
            ))
          ) : (
            <div>
              <ErrorCard />
              </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
