import React from "react";
import personalImage from "../../assets/personal-image.jpg";

const ImgContainer = () => {
  return (
    <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
      <figure className="hover-3d h-fit w-fit">
        <img
          className="mb-4 shadow-2xl max-w-60 sm:max-w-[20rem] shadow-amber-200 border-2 border-amber-200 rounded-full"
          src={personalImage}
          alt="Personal Photo"
        />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </figure>
    </div>
  );
};

export default ImgContainer;
