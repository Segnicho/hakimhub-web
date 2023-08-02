import React from "react";
import { render } from "@testing-library/react";
import DoctorCard from "@/components/doctor/DoctorCard";
import { mockDoctor } from "@/__tests__/mocks/data";

mockDoctor: mockDoctor
  
describe("DoctorCard", () => {
    it("should render the doctor's full name and specialities", () => {
      const { getByText } = render(<DoctorCard doctor={mockDoctor} />);
  
      const doctorName = getByText("John Doe");
      expect(doctorName).toBeInTheDocument();
  
      const doctorSpecialities = getByText(/Cardiology.*Neurology/i);
      expect(doctorSpecialities).toBeInTheDocument();
    });
  
    it("should render the doctor's image with the correct source", () => {
      const { getByAltText } = render(<DoctorCard doctor={mockDoctor} />);
  
      const doctorImage = getByAltText("doctor image") as HTMLImageElement;
      expect(doctorImage).toBeInTheDocument();
    });
  
    it("should render a link with the correct URL", () => {
      const { getByRole } = render(<DoctorCard doctor={mockDoctor} />);
  
      const linkElement = getByRole("link") as HTMLAnchorElement;
      expect(linkElement.href).toContain(`/doctors/${mockDoctor.id}`);
    });
  });
