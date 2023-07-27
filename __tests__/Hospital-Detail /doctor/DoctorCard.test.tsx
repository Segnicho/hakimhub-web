import React from "react";
import { render } from "@testing-library/react";
import DoctorCard from "./../../../components/doctor/DoctorCard";

const mockDoctor = {
    fullName: "John Doe",
    about: "Experienced doctor",
    gender: "Male",
    email: "john.doe@example.com",
    photoUrl: "https://samplehospital.com/doctors/john-doe.jpg",
    yearsOfExperience: 10,
    mainInstitutionId: "main-institution-id",
    mainInstitutionName: "Sample Hospital",
    specialities: ["Cardiology", "Neurology"],
    id: "doctor-id-1",
    educations: [
      {
        educationInstitution: "Sample University",
        startYear: "2010",
        graduationYear: "2016",
        degree: "Doctor of Medicine",
        fieldOfStudy: "Medicine",
        educationInstitutionLogoUrl: null,
        id: "education-id-1",
      },
    ],
    experiences: [
      {
        position: "Cardiologist",
        description: "Worked as a cardiologist at Example Clinic",
        startDate: "2016-01-01",
        endDate: "2020-12-31",
        institutionId: "institution-id-1",
        institutionName: "Example Clinic",
        id: "experience-id-1",
      },
      {
        position: "Neurologist",
        description: "Currently working as a neurologist at Sample Hospital",
        startDate: "2021-01-01",
        endDate: "2023-07-31",
        institutionId: "institution-id-2",
        institutionName: "Sample Hospital",
        id: "experience-id-2",
      },
    ],
  };
  
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
