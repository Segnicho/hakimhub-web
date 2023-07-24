import React from "react";
import { render } from "@testing-library/react";
import {Hero} from "../../components";

test("renders Hero component correctly", () => {
  const { getByText } = render(<Hero />);
  expect(getByText("Making Your")).toBeInTheDocument();
});
