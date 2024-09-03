import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const CarouselItem = ({ Title, Icon, Desc, Index, CurrentSlide }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: { x: -120, opacity: 1 }, // Exit animation
  };

  return (
    <motion.div
      className={`flex flex-col gap-y-3 justify-start items-center h-[20vh] transition-all ease-in-out duration-700`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={item}
    >
      <div
        id="whole-gradient"
        className="w-[250px] rounded-[10px] p-[1px] from-gray-200 to-transparent flex "
        style={{
          background: isHovered
            ? "linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 100%)"
            : "transparent",
        }}
      >
        <div
          style={{
            background: isHovered
              ? "linear-gradient(180deg, #141414 0%, rgba(255,195,113,1) 100%)"
              : "#141414",
          }}
          className="flex items-center justify-center flex-col gap-y-2 rounded-[10px] w-full p-2 from-gray-200 to-transparent"
        >
          <div
            className="rounded-full bg-gradient-to-b p-2 from-gray-200 to-transparent flex"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 100%)",
            }}
          >
            <div className="bg-black rounded-full text-white p-4">
              <Icon className="text-xl" />
            </div>
          </div>
          <div className="w-[100px] text-center font-bold">{Title}</div>
          {isHovered && (
            <div className="w-[250px] px-4 text-sm text-center">{Desc}</div>
          )}

          {isHovered && (
            <div className="flex justify-center items-center gap-x-3 border-[.5px] border-[#141414] py-2 rounded-full px-5 hover:bg-[#141414] cursor-pointer transition-all ease-in-out duration-700">
              Learn More{" "}
              <div className="bg-[#141414] rounded-full text-white px-4 py-2">
                <FaArrowRight />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CarouselItem;
