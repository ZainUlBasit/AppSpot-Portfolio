import React, { useState, useEffect, useRef } from "react";
import { FaMobileAlt } from "react-icons/fa";
import "./CarouselSlider.css";
import CarouselItem from "./CarouselItem";
import { ItemsData } from "./ItemsData";
import { motion } from "framer-motion";

const CarouselSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ItemsData.length);
    }, 2000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  // Calculate visible items dynamically based on currentIndex
  const visibleItems = [
    ItemsData[currentIndex % ItemsData.length],
    ItemsData[(currentIndex + 1) % ItemsData.length],
    ItemsData[(currentIndex + 2) % ItemsData.length],
    ItemsData[(currentIndex + 3) % ItemsData.length],
    // ItemsData[(currentIndex + 4) % ItemsData.length],
    // ItemsData[(currentIndex + 5) % ItemsData.length],
    // ItemsData[(currentIndex + 6) % ItemsData.length],
  ];

  return (
    <div
      className="rounded-3xl p-[1px] bg-gradient-to-b from-gray-200 to-transparent w-full h-[43.2vh]"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 100%)",
      }}
    >
      <div className="bg-[#141414] p-5 h-[43vh] rounded-[calc(1.5rem-1px)] w-[100%] flex flex-col justify-between items-start">
        <p className="text-gray-700 dark:text-gray-300">
          Transform your brand with our innovative digital solutions that
          captivate and engage your audience.
        </p>

        <div
          className="carousel-item-wrapper flex justify-between w-full"
          onMouseEnter={stopInterval}
          onMouseLeave={startInterval}
          style={{
            transform: `translateX(-20px)`,
          }}
        >
          {visibleItems.map(({ name, icon, desc }, i) => (
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="carousel-item"
              key={currentIndex + i}
            >
              <CarouselItem Title={name} Icon={icon} Desc={desc} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
