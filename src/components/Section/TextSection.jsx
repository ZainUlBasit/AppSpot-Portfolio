import React, { useEffect, useState } from "react";

const TextSection = ({ largeImg, smallImg, title, subTitle, className }) => {
  const [BgImg, setBgImg] = useState(largeImg);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 640) {
        setBgImg(smallImg);
      } else {
        setBgImg(largeImg);
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);

    return () => {
      window.removeEventListener("resize", updateImage);
    };
  }, [largeImg, smallImg]);
  return (
    <div className="py-8 w-full">
      <img src={BgImg} alt="Heading" className={`w-80 sm:w-96 ${className}`} />
      <div className="text-white px-14 font-spartan">
        <h1
          className={`text-3xl -mt-7 sm:text-[40px] font-semibold w-96 sm:-mt-9 text-white pb-5 ${className}`}
        >
          {title}
        </h1>
        <p className="text-base font-normal sm:text-lg text-justify">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default TextSection;
