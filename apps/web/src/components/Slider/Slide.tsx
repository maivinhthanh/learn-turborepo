import React, { useRef } from 'react';

interface SlideProps {
  slide: {
    src: string;
    button: string;
    headline: string;
    index: number;
  };
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide: React.FC<SlideProps> = ({ slide, current, handleSlideClick }) => {
  const slideRef = useRef<HTMLLIElement | null>(null);

  const handleSlideClickEvent = () => {
    handleSlideClick(slide.index);
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (event.target instanceof HTMLImageElement) {
      event.target.style.opacity = '1';
    }
  };

  let classNames = 'relative group w-[70vmin] h-[70vmin] m-0 p-0 text-white flex items-center justify-center transition-opacity duration-700 ease-in-out transform';

  if (current === slide.index) classNames += ' absolute inset-0 transform group-hover:translate-x-[1px] group-hover:translate-y-[1px] transition-transformt zoom-out';
  else if (current - 1 === slide.index) classNames += ' hover:opacity-50 cursor-w-resize hover:translate-x-[2%] scale-75 zoom-in';
  else if (current + 1 === slide.index) classNames += ' hover:opacity-50 cursor-e-resize hover:-translate-x-[2%] scale-75 zoom-in';

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={handleSlideClickEvent}
    >
      <div className="relative h-full w-full overflow-hidden bg-primary rounded-[5%] transform transition-transform duration-700 ease-in-out">
        <img
          className="relative h-[110%] w-[110%] transform transition-opacity transition-transform duration-700 ease-in-out pointer-events-none"
          alt={slide.headline}
          src={slide.src}
          onLoad={imageLoaded}
        />
      </div>
    </li>
  );
};

export default Slide;
