import { render,  screen } from '@testing-library/react';
import DoctorFilter from '@/components/doctor/DoctorFilter';
import { mockAllEducationalInstitutions } from '@/__tests__/mocks/data';

test('renders DoctorFilter correctly', () => {
    const allSpecialities = ['Speciality1', 'Speciality2', 'Speciality3'];
    const selectedSpeciality = ['Speciality2'];
    const selectedEducation = 'University B';
    const selectedExperience = '2';
    const onSpecialityChange = jest.fn();
    const onEducationChange = jest.fn();
    const onExperienceChange = jest.fn();
    const setSpeciality = jest.fn();
    const setSelectedSpeciality = jest.fn();
  
    render(
      <DoctorFilter
        allSpecialities={allSpecialities}
        allEducationalInstitutions={mockAllEducationalInstitutions}
        selectedSpeciality={selectedSpeciality}
        selectedEducation={selectedEducation}
        selectedExperience={selectedExperience}
        onSpecialityChange={onSpecialityChange}
        onEducationChange={onEducationChange}
        onExperienceChange={onExperienceChange}
        setSpeciality={setSpeciality}
        setSelectedSpeciality={setSelectedSpeciality}
      />
    );
  
    expect(screen.getByText('Speciality')).toBeInTheDocument();
    expect(screen.getByText('select')).toBeInTheDocument();
  
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getAllByText('2 years')[0]).toBeInTheDocument(); // Access the first element with text "2 years"
  
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getAllByText('University B')[0]).toBeInTheDocument();
  });
  

