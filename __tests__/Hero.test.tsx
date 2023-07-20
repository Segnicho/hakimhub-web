import React from "react";
import { render } from "@testing-library/react";
import {Hero} from "../components";

test("renders Hero component correctly", () => {
  const { getByText } = render(<Hero />);

  // Assert that the component renders the correct text content
  expect(getByText("Making Your")).toBeInTheDocument();
  expect(getByText("HealthCare")).toBeInTheDocument();
  expect(getByText("Options More Accessible")).toBeInTheDocument();
});
