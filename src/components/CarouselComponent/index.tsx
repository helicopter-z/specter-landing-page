import { FC, useEffect, useRef, useState } from "react";
import "./VerticalCarousel.css";
import CarouselImage1 from "../../images/carousel-image-1.png";
import CarouselImage2 from "../../images/carousel-image-2.png";
import CarouselImage3 from "../../images/carousel-image-3.png";
import {
  CarouselLineIcon,
  CarouselProfileIcon,
  CarouselTickIcon,
} from "../../icons";

const items = [
  {
    id: "01",
    label: "Find Growth Opportunities",
    description: `Instantly spot ICP-matched leads and pinpoint how to move them through your pipeline.`,
  },
  {
    id: "02",
    label: "Get Real Answers, Fast",
    description:
      "Ask anything about customers or deals and get usable, data-backed insights—not just regurgitated information.",
  },
  {
    id: "03",
    label: "Align Your Team",
    description: `Equip founders, sales, and product teams with a unified, actionable view of every account’s needs and trajectory.`,
  },
];

const CarouselComponent: FC = () => {
  const autoScroll = true,
    autoScrollInterval = 3000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<any>(null);

  const scrollToIndex = (index: any) => {
    const container = containerRef.current;
    if (container) {
      const itemHeight = container.scrollHeight / items.length;
      container.scrollTo({
        top: index * itemHeight,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0,
    );
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        handleNext();
      }, autoScrollInterval);
      return () => clearInterval(interval);
    }
  }, [autoScroll, autoScrollInterval]);

  const getImage = (id: string, index: number) => {
    switch (id) {
      case "01":
        return (
          <CarouselLineIcon
            color={index === currentIndex ? "#2B77E3" : "#7C7C7C"}
          ></CarouselLineIcon>
        );
      case "02":
        return (
          <CarouselTickIcon
            color={index === currentIndex ? "#2B77E3" : "#7C7C7C"}
          ></CarouselTickIcon>
        );
      case "03":
        return (
          <CarouselProfileIcon
            color={index === currentIndex ? "#2B77E3" : "#7C7C7C"}
          ></CarouselProfileIcon>
        );
    }
    return null;
  };

  const getSectionImage = () => {
    switch (currentIndex) {
      case 0:
        return CarouselImage1;
      case 1:
        return CarouselImage2;
      case 2:
        return CarouselImage3;
    }
    return "";
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid" ref={containerRef}>
        {items.map((item, index) => (
          <>
            <div key={index} className={`carousel-item}`}>
              <div className="grid gap-4 p-5">
                <div
                  className="flex item-center gap-6 cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                >
                  <span
                    className={`w-1 ${index === currentIndex ? "bg-gradient-to-b from-[#000000] from-0% via-[#046BFE] via-25% to-[#EBEBEB] to-50%" : "bg-[#EBEBEB]"}`}
                  ></span>
                  <div className="grid gap-4">
                    <div className="flex items-center">
                      {getImage(item.id, index)}
                      <p
                        className={`text-xl text-[#7C7C7C] ml-3 ${index === currentIndex ? "active" : ""}`}
                      >
                        {item.label}
                      </p>
                    </div>

                    <p className="text-lg text-[#7C7C7C]">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <img src={getSectionImage()} alt="" className="w-full" />
    </div>
  );
};

export default CarouselComponent;
