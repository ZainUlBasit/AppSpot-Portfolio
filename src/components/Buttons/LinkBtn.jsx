import React from "react";
import "./LinkBtn.css";
const LinkBtn = ({ title, link }) => {
  return (
    <a className="playstore-button" href={link}>
      <img
        src={
          title === "Playstore"
            ? // Playstore SVG Icon
              "./Playstore-White.png"
            : title === "AppStore"
            ? // AppStore SVG Icon
              "./AppStore-White.png"
            : title === "Web"
            ? // AppStore SVG Icon
              "./Web.png"
            : null
        }
        alt="not found"
        className="bg-transparent w-[30px] h-[30px]"
      />
      <span className="texts">
        <span className="text-1 whitespace-nowrap">GET IT ON</span>
        <span className="text-2">{title}</span>
      </span>
    </a>
  );
};

export default LinkBtn;
