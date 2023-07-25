import React from "react";
import { render, screen } from "@testing-library/react";
import Service from "@/components/home/Service";
import { services } from "@/data/home";

const mockService = services[0];

describe("Service Component", () => {
  it("should render the service details correctly", () => {
    render(<Service {...mockService} />);

    expect(screen.getByText(mockService.description)).toBeInTheDocument();

    expect(screen.getByTestId("service-image")).toBeInTheDocument();

    expect(screen.getByText(mockService.service)).toBeInTheDocument();
  });
});
