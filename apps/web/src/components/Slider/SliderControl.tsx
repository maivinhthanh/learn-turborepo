import React from "react";

interface SliderControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const SliderControl: React.FC<SliderControlProps> = ({
  type,
  title,
  handleClick,
}) => {
  return (
    <button
      className={`bg-primary border-none rounded-sm text-white cursor-pointer font-inherit text-inherit py-4 px-10 active:translate-y-1 focus:outline-solid focus:outline-3 focus:outline-offset-2 ${type === 'previous' ? 'transform rotate-180': ''}`}
      title={title}
      onClick={handleClick}
    >
      <svg className="w-full" viewBox="0 0 24 24">
        <path
          fill="#6B7A8F"
          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
        />
      </svg>
    </button>
  );
};

export default SliderControl;
