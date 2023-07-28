import {render} from "@testing-library/react"
import { Overview } from "@/components"


describe("Overview Component", () => {
  const props = {
    about: "This is a sample about section.",
    services: ["Service 1", "Service 2", "Service 3"],
    latitude: 9.02497,
    longitude: 38.74689,
  };

  it("renders about section", () => {
    const { getByText } = render(<Overview {...props} />);
    expect(getByText("About Us")).toBeInTheDocument();
    expect(getByText("This is a sample about section.")).toBeInTheDocument();
  });

  it("renders services section", () => {
    const { getByTestId } = render(<Overview {...props} />);
    expect(getByTestId("overview-services")).toBeInTheDocument();
 
  });

  it("renders map section", () => {
    const { container } = render(<Overview {...props} />);
    const mapElement = container.querySelector("#map");
    expect(mapElement).toBeInTheDocument();
  });
});