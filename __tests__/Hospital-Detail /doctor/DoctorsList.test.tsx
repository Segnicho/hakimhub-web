import React from 'react';
import { render, screen } from '@testing-library/react';
import DoctorsList from '@/components/doctor/DoctorsList';

jest.mock('@/store/features/doctors/doctors-api', () => ({
  useFilterDoctorsQuery: jest.fn(() => ({
    data: {
      value: [
        {
          id: 'doctor-1',
          fullName: 'John Doe',
          specialities: ['Cardiology', 'Neurology'],
        },
        {
          id: 'doctor-2',
          fullName: 'Jane Smith',
          specialities: ['Dermatology', 'Ophthalmology'],
        },
      ],
    },
    isError: false,
    isLoading: false,
  })),
}));

describe('DoctorsList', () => {
  it('should render the list of doctors with their names and specialities', () => {
    const mockAllSpecialities = ['Cardiology', 'Neurology', 'Dermatology', 'Ophthalmology'];
    const mockAllEducationalInstitutions = [{
        id: "edu-1",
        institutionName: "Sample University 1",
        logoUrl: "https://example.com/university1-logo.png",
      },
      {
        id: "edu-2",
        institutionName: "Sample University 2",
        logoUrl: "https://example.com/university2-logo.png",
      },
    ]; 

    render(
      <DoctorsList
        hospitalId="hospital-1"
        name="Sample Hospital"
        allSpecialities={mockAllSpecialities}
        allEducationalInstitutions={mockAllEducationalInstitutions}
      />
    );

    const doctorName1 = screen.getByText('John Doe');
    const doctorName2 = screen.getByText('Jane Smith');
    expect(doctorName1).toBeInTheDocument();
    expect(doctorName2).toBeInTheDocument();

    const doctorSpecialities1 = screen.getByText(/Cardiology/i);
    const doctorSpecialities2 = screen.getByText(/Neurology/i);
    const doctorSpecialities3 = screen.getByText(/Dermatology/i);
    const doctorSpecialities4 = screen.getByText(/Ophthalmology/i);
    expect(doctorSpecialities1).toBeInTheDocument();
    expect(doctorSpecialities2).toBeInTheDocument();
    expect(doctorSpecialities3).toBeInTheDocument();
    expect(doctorSpecialities4).toBeInTheDocument();
  });

});
