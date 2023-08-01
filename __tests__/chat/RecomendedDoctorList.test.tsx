import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RecomendedDoctorList from "../../components/chat/RecomendedDoctorList";
import { Doctor } from "@/types/chat/chat-types";
import { mockDoctors } from "../mocks/doctors";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const mockPush = jest.fn();
useRouter.mockReturnValue({ push: mockPush });
describe("RecomendedDoctorList component", () => {
  test("renders a single doctor when there is only one doctor", () => {
    const { getByText } = render(<RecomendedDoctorList doctors={[mockDoctors[0]]} />);
    const doctorName = getByText("John Doe");
    const doctorSpeciality = getByText("Cardiology");
    expect(doctorName).toBeInTheDocument();
    expect(doctorSpeciality).toBeInTheDocument();
  });

  test("renders multiple doctors in a slider when there are more than one", () => {
    const { getAllByText } = render(<RecomendedDoctorList doctors={mockDoctors} />);
    const doctorNames = getAllByText("John Doe");
    const doctorSpecialities = getAllByText("Cardiology");
    expect(doctorNames.length).toBe(mockDoctors.length);
    expect(doctorSpecialities.length).toBe(mockDoctors.length);
  });

  test("clicking on a doctor should trigger router.push with the correct URL", () => {
    const { getByText } = render(<RecomendedDoctorList doctors={mockDoctors} />);
    const doctorName = getByText(mockDoctors[0].fullName);
    fireEvent.click(doctorName);
    expect(mockPush).toHaveBeenCalledWith(`/doctors/${mockDoctors[0].id}`);
  });
});
