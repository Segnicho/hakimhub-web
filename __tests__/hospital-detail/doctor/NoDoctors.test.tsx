import React from 'react';
import { render, screen } from '@testing-library/react';
import NoDoctors from '@/components/doctor/NoDoctors';

describe('NoDoctors', () => {
  test('renders "NoDoctors" component correctly', () => {
    render(<NoDoctors />);

    const noDoctorsText = screen.getByText(/Oops!/i);
    expect(noDoctorsText).toBeInTheDocument();

    const doctorImage = screen.getByAltText('There is no doctor');
    expect(doctorImage).toBeInTheDocument();

    const noDataMessage = screen.getByText(
      'Seems like there is no doctor data available for this hospital at the moment.'
    );
    expect(noDataMessage).toBeInTheDocument();
  });

});
