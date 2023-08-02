import React from 'react';
import { render, screen } from '@testing-library/react';
import DoctorsList from '@/components/doctor/DoctorsList';
import { mockDoctors } from '@/__tests__/mocks/data'; 
import { mockAllEducationalInstitutions } from '@/__tests__/mocks/data';
import { mockAllSpecialities } from '@/__tests__/mocks/data';

jest.mock('@/store/features/doctors/doctors-api', () => ({
  useFilterDoctorsQuery: jest.fn(() => ({
    data: mockDoctors,
    isError: false,
    isLoading: false,
  })),
}));

describe('DoctorsList', () => {
  it('should render the list of doctors with their names and specialities', () => {

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