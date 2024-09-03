import cardImg from "../../assets/images/Ellipse 33.png";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OfferCard = ({ text, align }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set a default duration for animations
  }, []);
  return (
    <div
      data-aos={align === "r" ? "fade-left" : "fade-right"}
      className="relative inline-block p-[1px] rounded-full bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] z-10"
    >
      <div className="w-fit  py-4 px-4  text-white rounded-full flex items-center gap-3 bg-[#0F0B07] select-none">
        <img src={cardImg} className="w-4 h-4" />
        {text}
      </div>
    </div>
  );
};

export default OfferCard;
