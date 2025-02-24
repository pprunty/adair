import * as React from "react";
import "./track-carousel.css";

interface TrackCarouselProps {
  images: string[];
}

export function TrackCarousel({ images }: TrackCarouselProps) {
  const imageList = images.map((image, index) => (
    <li className="slide" key={index}>
      <img src={image} alt={`Slide ${index}`} />
    </li>
  ));

  return (
    <main>
      <div className="carousel">
          {imageList}
      </div>
    </main>
  );
}
