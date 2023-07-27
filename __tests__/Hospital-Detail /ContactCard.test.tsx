import React from "react";
import { render } from "@testing-library/react";
import ContactCard from "./../../components/hospital-detail/ContactCard";

const mockData = {
  website: "https://example.com",
  phoneNumber: "123-456-7890",
};

describe("ContactCard", () => {
  it("should render the contact card with the correct data", () => {
    const { getByText } = render(<ContactCard {...mockData} />);

    const heading1 = getByText("Contact");
    const heading2 = getByText("Reception");
    const heading3 = getByText("Web");
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    expect(heading3).toBeInTheDocument();

    const phoneNumber = getByText("123-456-7890");
    expect(phoneNumber).toBeInTheDocument();

    const websiteLink = getByText("website");
    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink.closest("a")).toHaveAttribute("href", "https://example.com");
  });

  it("should render the phone number and website link", () => {
    const { getByText } = render(<ContactCard {...mockData} />);

    const phoneNumber = getByText("123-456-7890");
    expect(phoneNumber).toBeInTheDocument();

    const websiteLink = getByText("website");
    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink.closest("a")).toHaveAttribute("href", "https://example.com");
  });
});
