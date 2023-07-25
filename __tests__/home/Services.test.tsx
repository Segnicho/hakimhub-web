import React from "react";
import { render, screen } from "@testing-library/react";
import Services from "@/components/home/Services";

describe("Services Component", () => {
  it("should render the services", () => {
    render(<Services />);

    expect(
      screen.getByText(
        "Hakimhub your guide to getting hospital and doctor recommendations."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Find Hospitals and Health Care Centers around you.")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Select from our diverse list of specialists based on your specific needs."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByAltText(
        "Hakimhub your guide to getting hospital and doctor recommendations."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Find Hospitals and Health Care Centers around you.")
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Select from our diverse list of specialists based on your specific needs."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Chat")).toBeInTheDocument();
    expect(screen.getByText("Hospitals")).toBeInTheDocument();
    expect(screen.getByText("Specialists")).toBeInTheDocument();
  });
});
