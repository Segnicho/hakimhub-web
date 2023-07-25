// RecomendedHospital.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RecomendedHospital from "./RecomendedHospital";
import { Institution } from "@/types/chat/service";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const mockPush = jest.fn();
useRouter.mockReturnValue({ push: mockPush });

const mockHospital: Institution = {
  institutionName: "Sample Hospital",
  branchName: "Main Branch",
  website: "https://samplehospital.com",
  phoneNumber: "+1 123-456-7890",
  summary: "This is a sample hospital summary.",
  establishedOn: "2020-01-01",
  rate: 4.5,
  status: "Active",
  allEducationalInstitutions: null,
  allSpecialities: null,
  logoUrl: "https://samplehospital.com/logo.jpg",
  bannerUrl: "https://samplehospital.com/banner.jpg",
  institutionAvailability: {
    startDay: "Monday",
    endDay: "Sunday",
    opening: "08:00 AM",
    closing: "06:00 PM",
    twentyFourHours: false,
    id: "availability-id",
  },
  address: {
    country: "Sample Country",
    region: "Sample Region",
    zone: "Sample Zone",
    woreda: "Sample Woreda",
    city: "Sample City",
    subCity: "Sample SubCity",
    longitude: 12.345678,
    latitude: 9.876543,
    summary: "Sample Address Summary",
    id: "address-id",
  },
  services: ["Service 1", "Service 2"],
  photos: ["https://samplehospital.com/photo1.jpg", "https://samplehospital.com/photo2.jpg"],
  doctors: [
    {
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
    },
    {
      fullName: "Jane Smith",
      about: "Specialized in Pediatrics",
      gender: "Female",
      email: "jane.smith@example.com",
      photoUrl: "https://samplehospital.com/doctors/jane-smith.jpg",
      yearsOfExperience: 8,
      mainInstitutionId: "main-institution-id",
      mainInstitutionName: "Sample Hospital",
      specialities: ["Pediatrics"],
      id: "doctor-id-2",
    },
  ],
  id: "hospital-id",
};

describe("RecomendedHospital component", () => { 
  test("clicking on a hospital should trigger router.push with the correct URL", () => {
    const { getByText } = render(<RecomendedHospital institution={mockHospital} />);

    const hospitalName = getByText(mockHospital.institutionName);
    fireEvent.click(hospitalName);

    expect(mockPush).toHaveBeenCalledWith(`/hospitals/${mockHospital.id}`);
  });

  test("renders the hospital details correctly", () => {
    const { getByText, getByAltText } = render(<RecomendedHospital institution={mockHospital} />);
    expect(getByText(mockHospital.institutionName)).toBeInTheDocument();
    mockHospital.doctors.forEach((doctor) => {
      expect(getByText(doctor.fullName)).toBeInTheDocument();
    });
    const hospitalBanner = getByAltText("recomended hospital detail image");
    expect(hospitalBanner).toBeInTheDocument();
    expect(hospitalBanner).toBeVisible();
  });
});