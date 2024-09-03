import React from "react";
import CarouselSlider from "./CarouselSlider";

const Carousel = () => {
  return (
    <div className="flex flex-1 px-10 w-[100vw] overflow-x-hidden justify-between p-5 gap-x-2 bg-black text-white h-[65vh]">
      <div className="flex flex-col gap-y-3 z-10 h-full bg-black">
        <div className="flex gap-x-1 text-2xl">
          Our{" "}
          <span
            id="services"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Services
          </span>
        </div>
        <div className="text-4xl font-bold">UI/UX Design</div>
      </div>
      {/* <div className="w-[300px]"> */}
      <CarouselSlider />
      {/* </div> */}
    </div>
  );
};

export default Carousel;
