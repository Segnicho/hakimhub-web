import { useState } from 'react';
import DoctorCard from './DoctorCard';
import { useFilterDoctorsQuery } from '@/store/features/doctors/doctors-api';
import { AllEducationalInstitutions } from '@/types/institution/institution-detail';
import DoctorFilter from './DoctorFilter';
import ErrorCard from '@/components/commons/ErrorCard';
import { Loading } from '@/components';
import NoFilteredDoctors from './NoFilteredDoctors';

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
  allEducationalInstitutions

}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState<string[]>([]);

  const setSpeciality = (speciality: string) => {
    setSelectedSpeciality((prevSpecialities) => {
      const isSpecialitySelected = prevSpecialities.includes(speciality);
      if (isSpecialitySelected) {
        return prevSpecialities.filter((item) => item !== speciality);
      } else {
        return [...prevSpecialities, speciality];
      }
    });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const { data: filteredDoctors, isError, isLoading } = useFilterDoctorsQuery({
    hospitalId: hospitalId,
    speciality: selectedSpeciality,
    education: selectedEducation,
    experience: selectedExperience,
  });

  if (isLoading) {
    return <Loading />;
  }

  const containerClasses ='flex flex-wrap my-6 overflow-y-auto h-[520px] mx-4';
  return (
    <div className="my-5 sm:my-8">
      <div className="flex flex-row cursor-pointer justify-between px-8" onClick={toggleFilters}>
        <div className="text-sm max-md:text-lg lg:text-xl flex flex-row">
          <h3 className="font-bold">
            Doctors at<span className="text-primary ml-1">{name}</span>
          </h3>
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
          setSpeciality={setSpeciality} setSelectedSpeciality={setSelectedSpeciality}        />
      )}
      {isError ? (
        <div>
          <ErrorCard />
        </div>
      ) : (
        <div className={containerClasses}>
          {filteredDoctors?.value && filteredDoctors?.value.length > 0 ? (
            filteredDoctors?.value.map((filterdoctor, index) => (
            <div key={index} className='w-1/3 md:w-1/3 max-sm:w-1/2 lg:w-1/4 max-xl:w-1/5'>
                <DoctorCard key={index} doctor={filterdoctor} />
            </div>
            ))
          ) : (
            <div>
              <NoFilteredDoctors />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
