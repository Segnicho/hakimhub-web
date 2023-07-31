import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "@/components/home/AboutUs";

describe("AboutUs component", () => {
  test("renders the AboutUs component correctly", () => {
    const { getByText, getByAltText } = render(<AboutUs />);

    const headingElement = getByText("What is Hakimhub?");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass(
      "font-bold text-[40px] text-primary-text text-center w-[80%]"
    );
    
    const contentElement = getByText(/HakimHub is a professional website/i);
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveClass("leading-1 tracking-wide w-[80%]");

    const imageElement = getByAltText("Phone");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveClass("object-contain h-[550px]");
  });
});
