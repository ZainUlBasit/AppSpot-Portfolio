import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CarasolCard.css";

const CarasolCard = ({ service }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set a default duration for animations
  }, []);
  return (
    // <div
    //   className="w-[100%] h-[44rem] sm:w-[100%] md:w-[48%] lmd:w-[48%] lg:w-[31.9%] rounded-[20px] overflow-hidden border-2 border-main flex justify-between flex-col"
    //   style={{ backgroundColor: primaryBgColor }}
    // ></div>
    <div
      className="card w-[100%] h-[30rem] max-w-[400px] flex justify-center"
      data-aos="fade-left"
    >
      <div className="profile-pic">
        <img
          src={
            service.title === "Web Development"
              ? "./WebDevelopment.jpg"
              : service.title === "App Development"
              ? "./AppDevelopment.jpg"
              : service.title === "UI/UX Design"
              ? "./UI.png"
              : service.title === "JavaScript Development"
              ? "./JavaScript.jpg"
              : service.title === "AI & Machine Learning"
              ? "./Ai.png"
              : "./TechnicalConsultation.jpg"
          }
        />
      </div>
      <div className="bottom">
        <div className="content bg-inherit">
          <span className="name bg-inherit text-[1.7rem] mt-9  2xl:text-[2rem]">
            {service?.title || ""}
          </span>
          <span className="about-me bg-inherit mt-0 text-[1.4rem] 2xl:text-[1.4rem] 2xl:mt-0">
            {service.desc}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarasolCard;
