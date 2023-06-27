import React, { useState } from 'react';
import DoctorCard from './DoctorCard';
import { useFilterDoctorsQuery } from '@/store/doctors/doctors-api';
import { AllEducationalInstitutions } from '@/types/institution/institution-detail';
import DoctorFilter from './DoctorFilter';

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
  const [selectedSpeciality, setSelectedSpeciality] = useState<string[]>([]);
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const { data: filteredDoctors, error } = useFilterDoctorsQuery({
    hospitalId: hospitalId,
    speciality: selectedSpeciality,
    education: selectedEducation,
    experience: selectedExperience,
  });

  console.log('filteredDoctors:', filteredDoctors);

  return (
    <div className="mx-6 my-6">
      <div
        className="flex flex-row items-center justify-between cursor-pointer"
        onClick={toggleFilters}
      >
        <div className="sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl my-2 flex flex-row text-2xl font-bold gap-2">
          <h3 className="ml-2">Doctors at</h3>
          <h3 className="text-primary">{name}</h3>
        </div>
        <div className="flex flex-row gap-2">
          <h3 className="text-primary">filter</h3>
          <svg
            className={`sm:w-4 w-6 h-6 ${showFilters ? 'transform rotate-180' : ''}`}
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
        />
      )}
      {error ? (
        <div className="text-center text-xl">
          <h3 className="text-2xl text-primary">Oops!</h3>
          <div className="text-black">An error occurred while fetching the hospital data.</div>
        </div>
      ) : (
        <div className="sm:mx-6 md:mx-16 md:w-3/4 lg:w-4/6 lg:ml-24 xl:w-full xl:-ml-6 2xl:w-full 2xl:-ml-6 flex flex-wrap w-full -mx-3 my-6 overflow-y-scroll h-[700px]">
          {filteredDoctors?.value && filteredDoctors?.value.length > 0 ? (
            filteredDoctors?.value.map((filterdoctor, index) => (
              <DoctorCard key={index} doctor={filterdoctor} />
            ))
          ) : (
            <div className="flex flex-row items-center my-30 mx-12 ml-44 mt-40 gap-1">
              <div className="text-start text-gray-500 font-bold">
                <h3 className="text-5xl my-2">Oops!</h3>
                Seems like there are no doctors data for this hospital at the moment.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
