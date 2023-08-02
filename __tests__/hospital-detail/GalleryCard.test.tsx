import React from "react";
import { render } from "@testing-library/react";
import Gallery from "@/components/hospital-detail/GalleryCard";
import { mockGalleryPhotos } from "../mocks/data";

describe("Gallery", () => {
  it("should render the gallery with correct number of photos", () => {
    const { getAllByAltText } = render(<Gallery photos={mockGalleryPhotos} />);

    const photoImages = getAllByAltText("photoimage");
    expect(photoImages.length).toBe(mockGalleryPhotos.length);

  });
});
