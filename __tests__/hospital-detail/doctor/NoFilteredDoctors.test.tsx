import React from 'react';
import { render, screen } from '@testing-library/react';
import NoFilteredDoctors from '@/components/doctor/NoFilteredDoctors';

describe('NoFilteredDoctors', () => {
  test('renders "NoFilteredDoctors" component correctly', () => {
    render(<NoFilteredDoctors />);

    const noFilteredDoctorsText = screen.getByText(/Oops!/i);
    expect(noFilteredDoctorsText).toBeInTheDocument();

    const doctorImage = screen.getByAltText('There is no doctor');
    expect(doctorImage).toBeInTheDocument();

    const noDataMessage = screen.getByText(
      'Seems like there is no doctor data available for this at the moment.'
    );
    expect(noDataMessage).toBeInTheDocument();
  });
});
