import { CarouselImage, CarrosselContainer, CarrosselSection, Indicator, IndicatorContainer, LeftArrowButton, Navigation, RightArrowButton } from "./Carousel";

import { useState, useEffect } from "react";

const carouselImages = [
  require("../../assets/banner/banner.webp"),
  require("../../assets/banner/banner (1).jpg"),
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // intervalo de troca de slide

    return () => clearInterval(interval);
  }, []);

  return (
    <CarrosselSection>
      <CarrosselContainer>
        <CarouselImage
          src={carouselImages[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
        />

        <Navigation>
          <LeftArrowButton onClick={prevImage}>←</LeftArrowButton>
          <RightArrowButton onClick={nextImage}>→</RightArrowButton>
        </Navigation>
        <IndicatorContainer>
          {carouselImages.map((_, index) => (
            <Indicator key={index} isActive={index === currentIndex} />
          ))}
        </IndicatorContainer>
      </CarrosselContainer>
    </CarrosselSection>
  );
}

