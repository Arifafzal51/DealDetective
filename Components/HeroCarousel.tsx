"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const HeroImages = () => [
  { ImgUrl: "assets/images/hero-1.svg", alt: "Smartwatch" },
  { ImgUrl: "assets/images/hero-2.svg", alt: "bag" },
  { ImgUrl: "assets/images/hero-3.svg", alt: "lamp" },
  { ImgUrl: "assets/images/hero-4.svg", alt: "airfryer" },
  { ImgUrl: "assets/images/hero-5.svg", alt: "chair" },
//   { ImgUrl: "assets/images/hero-6.svg", alt: "Smartwatch" },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel
    ">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {HeroImages().map((image) => (
          <img
            src={image.ImgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
            key={image.alt}
          />
        ))}
          </Carousel>
          <Image src="assets/icons/hand-drawn-arrow.svg" alt="handdrawn" width={175} height={175} className="max-xl:hidden absolute -left-[+15%] bottom-0 z-0" />
    </div>
  );
};

export default HeroCarousel;
