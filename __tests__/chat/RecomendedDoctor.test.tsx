import React from "react";
import { render } from "@testing-library/react";
import RecomendedDoctor from "../../components/chat/RecomendedDoctor";
import { mockDoctors } from "../mocks/doctors";

describe("RecomendedDoctor component", () => {
  test("renders doctor's name and speciality", () => {
    const { getByTestId, getByText } = render(<RecomendedDoctor doctor={mockDoctors[0]} />);
    const doctorName = getByText("John Doe");
    const doctorSpeciality = getByText("Cardiology");
    const outerDiv = getByTestId("recomended-doctor-outer-div"); 
    expect(doctorName).toBeInTheDocument();
    expect(doctorSpeciality).toBeInTheDocument();  
    expect(outerDiv).toBeInTheDocument();
    expect(outerDiv).toHaveClass(" flex flex-col justify-center  items-center rounded-md shadow-md  m-2 p-3 "); 
  });

  test("renders the doctor's photo", () => {
    const { getByAltText } = render(<RecomendedDoctor doctor={mockDoctors[0]} />);
    const doctorPhoto = getByAltText("recomended hospital detail");
    expect(doctorPhoto).toBeInTheDocument();
  });
});