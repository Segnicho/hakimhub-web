import React from "react";
import { render, screen } from "@testing-library/react";
import Service from "@/components/home/Service";
import { services } from "@/data/home";

const mockService = services[0];

describe("Service Component", () => {
  it("should render the service details correctly", () => {
    render(<Service {...mockService} />);

    // Ensure that the component renders the service description correctly
    expect(screen.getByText(mockService.description)).toBeInTheDocument();

    // Ensure that the component renders the service image correctly
    expect(screen.getByTestId("service-image")).toBeInTheDocument();

    // Ensure that the component renders the service name correctly
    expect(screen.getByText(mockService.service)).toBeInTheDocument();
  });
});
