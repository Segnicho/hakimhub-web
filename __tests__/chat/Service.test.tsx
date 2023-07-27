// Service.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import Service from "../../components/chat/Service";
describe("Service component", () => {
  test("renders the title and detail correctly", () => {
    const title = "Sample Title";
    const detail = "This is a sample detail.";
    const { getByText } = render(<Service title={title} detail={detail} />);
 
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toBeVisible();

    const detailElement = getByText(detail);
    expect(detailElement).toBeInTheDocument();
    expect(detailElement).toBeVisible();
  });
});
