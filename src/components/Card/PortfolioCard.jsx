import React from "react";
import Google from "../../assets/images/Google.png";
import App from "../../assets/images/App.png";
import LinkBtn from "../Buttons/LinkBtn";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PortfolioCard = ({
  ImgUrl,
  primaryBgColor,
  mainBgColor,
  title,
  subtitle,
  ios_link,
  web_link,
  android_link,
}) => {
  const navigate = useNavigate();
  const productItem = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const productItemImg = {
    hidden: { y: -500, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const productItemBtnLeft = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const productItemBtnRight = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    // lg:w-[48%] md:[40%] xl:[48%] sm:w-[48%]
    <motion.div
      variants={productItem}
      className="w-[100%] min-h-[44rem] sm:w-[100%] md:w-[48%] lmd:w-[48%] lg:w-[31.9%] rounded-[30px] overflow-hidden border-4 flex justify-between flex-col fade-in"
      style={{ backgroundColor: primaryBgColor, borderColor: mainBgColor }}
    >
      {/* h-[70vh] xsm:h-[65vh] smd:h-[60vh] md:h-[65vh] lmd:h-[62vh] */}
      <motion.div
        variants={productItemImg}
        className="w-full h-[30rem]"
        style={{ backgroundColor: primaryBgColor }}
      >
        <img
          src={ImgUrl}
          alt=""
          className="w-full h-[30rem] object-cover"
          style={{ backgroundColor: primaryBgColor }}
        />
      </motion.div>
      <div
        className="flex-1 gap-y-4 w-full font-spartan py-4 px-3 text-white rounded-t-[20px]  
         "
        style={{ backgroundColor: mainBgColor }}
        // h-[30vh] xsm:h-[35vh] md:h-[35vh] smd:h-[40vh] lmd:h-[38vh]
      >
        <div
          className="text-base xsm:text-xl font-semibold text-wrap pt-2 w-[100%] md:w-[70%]"
          style={{ backgroundColor: mainBgColor }}
        >
          {title}
        </div>
        <div
          className="text-sm xsm:text-base w-full text-wrap pt-2"
          style={{ backgroundColor: mainBgColor }}
        >
          {subtitle}
        </div>
        <div
          className={`flex items-center justify-around gap-x-1 pt-3 flex-wrap ssm:flex-wrap md:flex-nowrap xl:flex-nowrap gap-y-2 2xl:flex-nowrap`}
          style={{ backgroundColor: mainBgColor }}
        >
          {/* <button className="w-48 h-10 sm:w-30 sm:h-8"> */}
          {android_link && <LinkBtn title={"Playstore"} link={android_link} />}
          {ios_link && <LinkBtn title={"AppStore"} link={ios_link} />}
          {web_link && <LinkBtn title={"Web"} link={web_link} />}

          {/* </button> */}
          {/* <button className="w-36 h-10 sm:w-30 sm:h-8"> */}
          {/* <img
            src={App}
            alt="Apple Store"
            className="min-w-[80px] max-w-[150px] object-cover cursor-pointer"
            style={{ backgroundColor: mainBgColor }}
          /> */}
          {/* </button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
