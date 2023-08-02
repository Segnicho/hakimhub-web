import React from 'react';
import { render } from '@testing-library/react';
import HospitalDetailCard from '@/components/hospital-detail/HospitalDetailCard';
import { mockHospitalDetailCardData } from '../mocks/data';

describe("HospitalDetailCard", () => {
  it("should render the hospital card with the correct data", () => {
    const { getByAltText, getByText } = render(<HospitalDetailCard {...mockHospitalDetailCardData} />);

    const hospitalImage = getByAltText("Hospital Image");
    expect(hospitalImage).toBeInTheDocument();

    const hospitalLogo = getByAltText("Logo of the Hospital");
    expect(hospitalLogo).toBeInTheDocument();

    const hospitalNamePart1 = getByText("Hospital", { exact: false });
    expect(hospitalNamePart1).toBeInTheDocument();

    const hospitalNamePart2 = getByText("Name", { exact: false });
    expect(hospitalNamePart2).toBeInTheDocument();

    const hospitalStatus = getByText("OPEN");
    expect(hospitalStatus).toBeInTheDocument();
  });

  it("should not render the logo when logo prop is not provided", () => {
    const { queryByAltText } = render(<HospitalDetailCard {...mockHospitalDetailCardData} logo={undefined} />);

    const hospitalLogo = queryByAltText("Logo of the Hospital");
    expect(hospitalLogo).not.toBeInTheDocument();
  });
});
