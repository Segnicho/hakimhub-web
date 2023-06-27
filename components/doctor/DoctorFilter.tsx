import { AllEducationalInstitutions } from '@/types/institution/institution-detail';

interface DoctorFilterProps {
  allSpecialities: string[];
  allEducationalInstitutions: AllEducationalInstitutions[];
  selectedSpeciality: string[];
  selectedEducation: string;
  selectedExperience: string;
  onSpecialityChange: (value: string[]) => void;
  onEducationChange: (value: string) => void;
  onExperienceChange: (value: string) => void;
}

const DoctorFilter: React.FC<DoctorFilterProps> = ({
  allSpecialities,
  allEducationalInstitutions,
  selectedSpeciality,
  selectedEducation,
  selectedExperience,
  onSpecialityChange,
  onEducationChange,
  onExperienceChange,
}) => {
  const handleSpecialityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    onSpecialityChange(selectedOptions);
  };

  return (
    <div className="flex lg:flex-row xl:flex-row 2xl:flex-row sm:flex-col md:flex-col items-center space-x-4 mt-4 ml-2">
      <div className="relative">
        <label htmlFor="speciality" className="text-md font-semi-bold text-primary">
          Speciality
        </label>
        <select
          id="speciality"
          className="block w-40 py-2 px-3 bg-white rounded-md shadow-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={selectedSpeciality}
          onChange={handleSpecialityChange}
          multiple
        >
          <option value="">Select specialities...</option>
          {allSpecialities.map((speciality, index) => (
            <option value={speciality} key={index}>
              {speciality}
            </option>
          ))}
        </select>
      </div>
      {allEducationalInstitutions.length > 0 && (
        <div className="relative">
          <label htmlFor="university" className="text-md font-semi-bold text-primary">
            Education
          </label>
          <select
            id="university"
            className="block w-48 py-2 px-3 bg-white rounded-md shadow-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={selectedEducation}
            onChange={(e) => onEducationChange(e.target.value)}
          >
            <option value="">select</option>
            {allEducationalInstitutions.map((educationalInstitution) => (
              <option value={educationalInstitution.institutionName} key={educationalInstitution.id}>
                {educationalInstitution.institutionName}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="relative">
        <label htmlFor="experience" className="text-md font-semi-bold text-primary">
          Experience
        </label>
        <select
          id="experience"
          className="block w-40 py-2 px-3 bg-white rounded-md shadow-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={selectedExperience}
          onChange={(e) => onExperienceChange(e.target.value)}
        >
          <option value="">select</option>
          <option value="0">0 years</option>
          <option value="1">1 years</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="4">4 years</option>
          <option value="5">5 years</option>
        </select>
      </div>
    </div>
  );
};

export default DoctorFilter;
