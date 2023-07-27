import React from 'react';
import { render } from '@testing-library/react';
import HospitalDetailCard, { HospitalCardProps } from './../../components/hospital-detail/HospitalDetailCard';

const mockData: HospitalCardProps = {
  image: "https://example.com/path/to/image.jpg",
  name: "Hospital Name",
  status: "Open",
  logo: "https://example.com/path/to/logo.jpg",
};

describe("HospitalDetailCard", () => {
  it("should render the hospital card with the correct data", () => {
    const { getByAltText, getByText } = render(<HospitalDetailCard {...mockData} />);

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
    const { queryByAltText } = render(<HospitalDetailCard {...mockData} logo={undefined} />);

    const hospitalLogo = queryByAltText("Logo of the Hospital");
    expect(hospitalLogo).not.toBeInTheDocument();
  });
});
