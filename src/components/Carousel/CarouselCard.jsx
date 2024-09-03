import React, { useState } from "react";

const CarouselCard = ({ Icon, title, img, desc, i }) => {
  const [isActive, setIsActive] = useState(false);

  const gradientStyle = {
    background:
      "linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const cardStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="relative h-[300px] w-[250px] gap-3 rounded-[20px] overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-transform ease-in-out duration-600 flip-card border border-main"
      style={cardStyle}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div
        className={`overlay absolute top-0 left-0 w-full h-full ${
          isActive
            ? "bg-[rgba(0,0,0,1)]"
            : isActive
            ? "bg-[rgba(0,0,0,1)]"
            : "bg-[rgba(0,0,0,.8)]"
        } z-1 fade-in`}
      ></div>

      <div
        className={`absolute bottom-0 left-0 flex flex-col gap-y-2 justify-center items-center w-full transition-all ease-in-out duration-700 px-3 bg-transparent flip-card-inner ${
          isActive ? "py-10" : "py-4"
        }`}
      >
        <img
          src="/IconContainer.png"
          className="w-[50px]"
          style={gradientStyle}
        />
        <span
          className={`text-2xl font-bold font-spartan text-center flip-card-front pt-24`}
          style={gradientStyle}
        >
          {title}
        </span>
        {desc && (
          <span
            className={`transition-all ease-in-out duration-[3s] text-center transform text-main text-lg px-2 font-spartan flip-card-back ${
              !isActive
                ? "max-h-0 opacity-0 overflow-hidden"
                : "max-h-[500px] opacity-100"
            } `}
          >
            {desc &&
              desc.split("Per").map((item, index) => (
                <React.Fragment key={index}>
                  {index === 1 && "Per"}
                  {item}
                  <br />
                </React.Fragment>
              ))}
          </span>
        )}
      </div>
    </div>
  );
};

export default CarouselCard;
