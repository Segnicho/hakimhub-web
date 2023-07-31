import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {Navbar} from "@/components";

describe("Navbar component", () => {
  test("renders the Navbar component correctly", () => {
    const { getAllByText } = render(<Navbar />);

    const homeLink = getAllByText("Home")[0];
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveClass("font-semibold pt-2");

    const chatLink = getAllByText("Chat")[0];
    expect(chatLink).toBeInTheDocument();
    expect(chatLink).toHaveClass("font-semibold pt-2 text-tertiary-text");

    const hospitalsLink = getAllByText("Hospitals")[0];
    expect(hospitalsLink).toBeInTheDocument();
    expect(hospitalsLink).toHaveClass("font-semibold pt-2 text-tertiary-text");
  });

  test("activates the link when clicked", () => {
    const { getAllByText } = render(<Navbar />);

    const homeLink = getAllByText("Home")[0];
    expect(homeLink).toHaveClass("text-primary");

    const chatLink = getAllByText("Chat")[0];
    fireEvent.click(chatLink);

    expect(chatLink).toHaveClass("text-primary");
    expect(homeLink).not.toHaveClass("text-primary");

    const hospitalsLink = getAllByText("Hospitals")[0];
    fireEvent.click(hospitalsLink);

    expect(hospitalsLink).toHaveClass("text-primary");
    expect(chatLink).not.toHaveClass("text-primary");
    expect(homeLink).not.toHaveClass("text-primary");
  });
});
