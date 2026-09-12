import React from "react";
import ImgContainer from "./ImgContainer";
import TextContainer from "./TextContainer";

const Home = () => {
  return (
    <div className="pt-24 md:pt-32 min-h-screen px-4 pb-16 max-w-6xl mx-auto space-y-16 hero h-full">
      <div className="hero-content flex-col-reverse lg:flex-row w-full h-fit">
        <TextContainer />
        <ImgContainer />
      </div>
    </div>
  );
};

export default Home;