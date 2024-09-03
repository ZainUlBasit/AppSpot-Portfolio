import React from "react";

const AboutHeader = ({ title, subtitle }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-start flex-col w-[90%]  h-full text-white pt-12 font-spartan bg-black">
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
        <p className="text-start text-4xl mb-3 font-normal w-[50%] text-[#FF916F]">
          Who we are
        </p>

        <p className="text-start text-[26px] mmd:text-4xl font-bold w-[100%] mmd:w-[50%]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
