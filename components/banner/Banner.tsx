// components/ui/banner-slider.tsx
"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../common/Container";

interface BannerItem {
  id: string | number;
  image: string;
  alt: string;
  link?: string;
}

interface BannerSliderProps {
  items: BannerItem[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  infinite?: boolean;
  dots?: boolean;
  arrows?: boolean;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
}

const ArrowButton = ({
  className,
  onClick,
  icon: Icon,
}: {
  className?: string;
  onClick?: () => void;
  icon: typeof ChevronLeft;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "absolute top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110",
      className
    )}
    aria-label={Icon === ChevronLeft ? "Previous slide" : "Next slide"}
  >
    <Icon className="w-6 h-6 text-gray-800" />
  </button>
);

export function BannerSlider({
  items,
  autoplay = true,
  autoplaySpeed = 3000,
  infinite = true,
  dots = true,
  arrows = true,
  className,
  imageClassName,
  aspectRatio = "16/9",
}: BannerSliderProps) {
  const settings = {
    dots,
    infinite,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed,
    arrows: false,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    swipeToSlide: true,
    touchThreshold: 10,
  };

  const sliderRef = React.useRef<Slider>(null);

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handleBannerClick = (link?: string) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div className={cn("relative w-full overflow-hidden ", className)}>
      {arrows && items.length > 1 && (
        <>
          <ArrowButton
            onClick={handlePrevious}
            icon={ChevronLeft}
            className="left-4"
          />
          <ArrowButton
            onClick={handleNext}
            icon={ChevronRight}
            className="right-4"
          />
        </>
      )}

      <Slider ref={sliderRef} {...settings}>
        {items.map((item) => (
          <div key={item.id} className="outline-none">
            <div
              className={cn(
                "relative w-full cursor-pointer",
                item.link && "hover:opacity-95 transition-opacity"
              )}
              style={{ aspectRatio }}
              onClick={() => handleBannerClick(item.link)}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className={cn("object-cover", imageClassName)}
                priority={items.indexOf(item) === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
              />
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slick-dots {
          bottom: 16px;
        }
        .slick-dots li button:before {
          font-size: 10px;
          color: white;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: white;
        }
      `}</style>
    </div>
  );
}

// Example usage component
// components/home-banner.tsx
export function Banner() {
  const bannerItems: BannerItem[] = [
    {
      id: 1,
      image:
        "https://img.lazcdn.com/us/domino/1f30d0df-8c3b-473a-a56f-76c3535a8f9e_BD-1976-688.jpg_2200x2200q80.jpg_.avif",
      alt: "Banner 1",
      link: "/promotion-1",
    },
    {
      id: 2,
      image:
        "https://img.lazcdn.com/us/domino/8aae7c66-ce2a-4457-92e8-fd34e72e50f5_BD-1976-688.jpg_2200x2200q80.jpg_.avif",
      alt: "Banner 2",
      link: "/promotion-2",
    },
  ];

  return (
    <Container>
      <BannerSlider
        items={bannerItems}
        autoplay={true}
        autoplaySpeed={4000}
        aspectRatio="1976/688"
      />
    </Container>
  );
}
