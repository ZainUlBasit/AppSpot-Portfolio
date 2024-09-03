import { useEffect } from "react";
import AOS from "aos";

const TestimonialCard = ({ title, text, avatar, name, CardImg, Index }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // You can set a default duration for animations
  }, []);
  return (
    <div
      className="w-80 h-96 mx-auto relative font-spartan bg-transparent"
      data-aos={
        title === "Chief Technology Officer"
          ? "fade-right"
          : title === "Chief Operating Officer"
          ? "fade-left"
          : "flip-up"
      }
    >
      <img src={CardImg} alt="" className="w-[90%] h-[90%] z-50" />
      <div
        className={`absolute -top-32 sm:-top-28 inset-0 flex flex-col items-center justify-center p-4 bg-transparent
       ${Index === 1 ? "-top-60 sm:-top-48" : ""}
       ${Index === 2 ? "-top-40 sm:-top-28" : ""}
       `}
      >
        <img
          src={avatar}
          alt="Client"
          className="w-20 h-20 rounded-full bg-main object-cover"
        />
        <div className="text-center bg-transparent p-4 rounded-lg max-w-[90%] flex flex-col items-center">
          <h3
            className={`text-sm bg-transparent sm:text-lg font-bold text-white  ${
              Index === 2 ? "pr-3" : "pr-3"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-base bg-transparent text-[#CFCFCF] font-normal text-center w-[80%] `}
          >
            {name}
          </p>
          <p
            className={`text-sm w-full bg-transparent sm:text-base text-[#E6E6E6] font-normal ${
              Index === 2 ? "pr-5" : "px-3"
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
