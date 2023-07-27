import React from "react";
import { render } from "@testing-library/react";
import RecomendedDoctor from "../../components/chat/RecomendedDoctor";
const mockDoctor = {
  fullName: "John Doe",
  about: "Experienced doctor",
  gender: "Male",
  email: "john.doe@example.com",
  photoUrl: "https://example.com/john-doe.jpg",
  yearsOfExperience: 10,
  mainInstitutionId: "12345",
  mainInstitutionName: "Example Hospital",
  specialities: ["Cardiology"],
  id: "6789",
};

describe("RecomendedDoctor component", () => {
  test("renders doctor's name and speciality", () => {
    const { getByTestId, getByText } = render(<RecomendedDoctor doctor={mockDoctor} />);
    const doctorName = getByText("John Doe");
    const doctorSpeciality = getByText("Cardiology");
    const outerDiv = getByTestId("recomended-doctor-outer-div"); 
    expect(doctorName).toBeInTheDocument();
    expect(doctorSpeciality).toBeInTheDocument();  
    expect(outerDiv).toBeInTheDocument();
    expect(outerDiv).toHaveClass(" flex flex-col justify-center  items-center rounded-md shadow-md  m-2 p-3 "); 
  });

  test("renders the doctor's photo", () => {
    const { getByAltText } = render(<RecomendedDoctor doctor={mockDoctor} />);
    const doctorPhoto = getByAltText("recomended hospital detail");
    expect(doctorPhoto).toBeInTheDocument();
  });
});