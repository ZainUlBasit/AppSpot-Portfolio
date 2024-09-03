import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";

const MainHeader = ({ title, subtitle, subheading }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set a default duration for animations
  }, []);

  return (
    <>
      <div
        className="w-full flex justify-center fade-in"
        data-aos={false ? "fade-left" : "fade-right"}
      >
        <div className="flex justify-start flex-col w-[90%]  h-full text-white pt-12 font-spartan bg-black">
          <div
            className={`font-semibold text-[35px] pl-1 text-start  uppercase ${
              title === "Case Studies"
                ? "text-[32px] xsm:text-[46px] ssm:text-[63px] msm:text-[74px] sm:text-[87px] smd:text-[105px] nmd:text-[120px]"
                : "xsm:text-[50px] xsm:pl-3 ssm:text-[75px] ssm:pl-6 msm:text-[90px] msm:pl-9 sm:text-[108px] sm:pl-12 smd:text-9xl smd:pl-16"
            }`}
          >
            <span
              className="inline-block font-spartan tracking-wide text-transparent  text-center mb-5 select-none "
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#FF916F",
              }}
            >
              {title}
            </span>
          </div>
          {subheading && (
            <div>
              <p className="text-start text-4xl mb-3 font-normal w-[50%] text-[#FF916F]">
                {subheading}
              </p>
            </div>
          )}
          <div>
            <p className="text-start text-[26px] mmd:text-4xl font-light w-[100%] mmd:w-[50%]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
{
  /* <div className="flex flex-1 justify-center items-center flex-col w-full  h-full text-white py-28  font-spartan gap-y-3 bg-black">
<h1 className="font-semibold text-[35px] xsm:text-[50px] ssm:text-[75px] msm:text-[90px] sm:text-[108px] smd:text-9xl text-start pl-16 uppercase">
  <span
    className="inline-block font-spartan tracking-wide text-transparent  text-center mb-5 "
    style={{
      WebkitTextStrokeWidth: "1px",
      WebkitTextStrokeColor: "white",
    }}
  >
    {title}
  </span>
</h1>
<p className="text-center text-xl px-3">{subtitle}</p>
</div> */
}
