import React, { useEffect } from "react";
import AOS from "aos";

const AboutusSection = ({ Heading, title, subtitle, className, align }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set a default duration for animations
  }, []);
  return (
    <div
      className={` w-[100%] mmd:[w-48%] min-w-[300px] h-full flex flex-col text-white font-spartan fade-in ${className}`}
      data-aos={align === "left" ? "fade-left" : "fade-right"}
    >
      <div className="w-full px-4">
        {Heading && (
          <img
            src={Heading}
            alt="Heading"
            className="w-36 h-36 min-w-20 mt-8"
          />
        )}
        <div className="pt-12 w-full">
          <h1 className="text-4xl font-semibold text-[#FF916F]">{title}</h1>
          <p className="text-[1.3rem] text-justify font-normal pt-3 w-full">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutusSection;
{
  /* <div className="w-full overflow-hidden relative md:w-7/12 h-96 flex justify-center items-center">
<div className="object-cover w-2/5 h-56">
  <img src={sideImg1} alt="" className="w-full h-full" />
</div>
<div className="w-1/6 absolute right-[63%] bottom-0 rounded-md">
  <img src={sideImg2} alt="" className="w-full h-full" />
</div>
<div className="w-2/6 z-50  absolute top-4 right-[43%] rounded-2xl">
  <img src={sideImg3} alt="" className="w-full h-full" />
</div>
<div className="w-2/5 h-56 absolute left-[40%] top-32 rounded-md">
  <img src={sideImg4} alt="" className="w-full h-full" />
</div>
</div> */
}
