import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RecomendedHospital from "../../components/chat/RecomendedHospital";
import { Hospital } from "../mocks/hospitals";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const mockPush = jest.fn();
useRouter.mockReturnValue({ push: mockPush });



describe("RecomendedHospital component", () => { 
  test("clicking on a hospital should trigger router.push with the correct URL", () => {
    const { getByText } = render(<RecomendedHospital institution={Hospital} />);

    const hospitalName = getByText(Hospital.institutionName);
    fireEvent.click(hospitalName);

    expect(mockPush).toHaveBeenCalledWith(`/hospitals/${Hospital.id}`);
  });

  test("renders the hospital details correctly", () => {
    const { getByText, getByAltText } = render(<RecomendedHospital institution={Hospital} />);
    expect(getByText(Hospital.institutionName)).toBeInTheDocument();
    Hospital.doctors.forEach((doctor) => {
      expect(getByText(doctor.fullName)).toBeInTheDocument();
    });
    const hospitalBanner = getByAltText("recomended hospital detail image");
    expect(hospitalBanner).toBeInTheDocument();
    expect(hospitalBanner).toBeVisible();
  });
});