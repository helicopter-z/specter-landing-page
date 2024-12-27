import { FC, useEffect, useRef, useState } from "react";
import "./VerticalCarousel.css";
import Section2Bg from "../../images/section-3-carousel-1.png";

const items = [
  {
    id: "01",
    label: "Ingest Your Data",
    description: `Your CRM listens to every call, reviews every email, and ingests product information, so it always has a comprehensive view. You don’t lift a finger—no manual updates needed.`,
  },
  {
    id: "02",
    label: "Understand & Prioritize",
    description:
      "It interprets every piece of data to highlight who’s likely to buy, who’s showing intent to expand, who’s cooling off, and when to engage. You’re never caught guessing which prospect to nurture or which account is at risk.",
  },
  {
    id: "03",
    label: "Take Action at Scale",
    description: `The system doesn’t just suggest next steps—it builds the entire plan. It pinpoints the right channels, timing, and touchpoints for each account. It finds key connectors, leverages common threads, and sequences introductions. Then, it sends the emails, arranges the meetings, and updates the messaging as needed. Approve or let it run, and watch every deal move faster while nothing falls through the cracks.`,
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

  return (
    <div className="vertical-carousel">
      <div className="carousel-container" ref={containerRef}>
        {items.map((item, index) => (
          <>
            <div key={index} className={`carousel-item}`}>
              <div className="grid gap-4 p-5">
                <div className="flex item-center gap-6">
                  <span
                    className={`border-2  ${index === currentIndex ? "border-[#046BFE]" : "border-[#EBEBEB]"}`}
                  ></span>
                  <div className="grid gap-4">
                    <p
                      className={`text-xl text-blacklight ${index === currentIndex ? "active" : ""}`}
                    >
                      {item.label}
                    </p>
                    <p className="text-lg text-blacklight">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <img src={Section2Bg} alt="" className="w-full" />
    </div>
  );
};

export default CarouselComponent;
