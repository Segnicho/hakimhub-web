import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DoctorDetail from '../../pages/doctors/[id]';
import { mockDoctorData} from '../mocks/doctors';
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: '' },
  }),
}));


jest.mock('@/store/features/doctor-detail', () => ({
  useGetDoctorByIdQuery: jest.fn((id) => ({
    data: {
      ...mockDoctorData,
    },
    isLoading: false,
    error: null,
  })),
}));

describe('DoctorDetail', () => {
  test('renders Doctor Detail correctly', async () => {
    render(<DoctorDetail />);

    await waitFor(
      () => expect(screen.queryByText('Loading')).not.toBeInTheDocument(),
      { timeout: 10000 } 
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText("Cardiology")).toBeInTheDocument();
    expect(screen.getByText('ABC Hospital')).toBeInTheDocument();

    const doctorImage = screen.getByAltText('Doctor detail');
    expect(doctorImage).toBeInTheDocument();
   
    expect(screen.getByText('MD')).toBeInTheDocument();
    expect(screen.getByText('University of Medicine')).toBeInTheDocument();
  });

});