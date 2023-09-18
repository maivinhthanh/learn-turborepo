import React, { useState } from "react";
import SliderControl from "./SliderControl";
import Slide from "./Slide";

interface SliderProps {
  slides: any[];
  heading: string;
}

const Slider: React.FC<SliderProps> = ({ slides, heading }) => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  return (
    <div className="overflow-hidden w-screen">
      <div
        className="h-[70vmin] w-[70vmin] mx-auto relative"
        aria-labelledby={headingId}
      >
        <ul
          className="flex absolute transition-transform duration-600 ease-in-out translate-x-[-4vmin]"
          style={wrapperTransform}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </ul>

        <div className="flex justify-center absolute top-[calc(100%+1rem)] w-full">
          <SliderControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />

          <SliderControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
