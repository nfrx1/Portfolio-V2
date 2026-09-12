import React from "react";

const TextContainer = () => {
  return (
    <div className="w-full lg:w-1/2 h-full flex justify-center text-center lg:text-left">
      <div className="w-fit flex flex-col items-center lg:items-start">
        <span className="text-primary">Hello World, I'm</span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Dawood Ali
        </h2>
        <span className="text-rotate">
          <span className="text-xl text-primary h-fit flex flex-col items-center lg:items-start">
            <span>Web Developer</span>
            <span>Full-Stack Developer</span>
          </span>
        </span>
        <p className="mt-2">Welcome to my personal website</p>
      </div>
    </div>
  );
};

export default TextContainer;
