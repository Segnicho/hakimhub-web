import React from "react";
import { render } from "@testing-library/react";
import Gallery from "@/components/hospital-detail/GalleryCard";

const mockPhotos = [
  "https://example.com/photo1.jpg",
  "https://example.com/photo2.jpg",
  "https://example.com/photo3.jpg",
];

describe("Gallery", () => {
  it("should render the gallery with correct number of photos", () => {
    const { getAllByAltText } = render(<Gallery photos={mockPhotos} />);

    const photoImages = getAllByAltText("photoimage");
    expect(photoImages.length).toBe(mockPhotos.length);

  });
});
