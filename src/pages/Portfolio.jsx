import React, { useEffect } from "react";
import MainHeader from "../components/Header/MainHeader";
import PheroImg from "../assets/images/Portfolio.png";
import Heading from "../assets/images/Portfolio1.png";
import PortfolioCard from "../components/Card/PortfolioCard";
import PortfolioWrapper from "../components/Wrapper/PortfolioWrapper";
import Note from "../components/Section/Note";
import ContactCard from "../components/Card/ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolios } from "../store/Slices/PortfolioSlice";
import ImgUrl from "../assets/images/PortfolioNew.png";
import ImgUrl2 from "../assets/images/PortfolioNew2.png";
import ImgUrl3 from "../assets/images/PortfolioNew3.png";
import ContactLoader from "../components/Loader/ContactLoader";
import { motion } from "framer-motion";

import "./Portfolio.css";
const Portfolio = () => {
  const dispatch = useDispatch();
  const PortfolioData = useSelector((state) => state.PortfolioState);
  const Loading = useSelector((state) => state.PortfolioState.loading);
  console.log("Data", PortfolioData);

  const containerProduct = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2, // Add duration here for the animation
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    dispatch(fetchPortfolios());
  }, []);
  return (
    <div className="bg-black h-[100%]">
      {/* <Navbar /> */}
      <MainHeader
        HeroImg={PheroImg}
        title="Case Studies"
        subtitle="Custom tailored solutions we built for our clients to achieve their unique business goals."
      />
      {/* <div className="pt-16 pb-2">
        <img src={Heading} alt="Heading" className="w-80" />
        <h1 className="text-4xl font-semibold -mt-9 text-white pb-5 px-14">
          See what we've <br />
          completed so far
        </h1>
      </div> */}
      <motion.div
        className="w-full h-[100%] items-stretch px-8 mt-16 mb-28 gap-5 flex-wrap flex"
        variants={containerProduct}
        initial={"hidden"}
        animate={"visible"}
      >
        {Loading ? (
          <div class="loaderes w-[100%] flex justify-center items-center font-bold text-3xl font-spartan"></div>
        ) : (
          PortfolioData.data.map((item) => (
            <PortfolioCard
              key={item._id}
              mainBgColor={item.main_color}
              primaryBgColor={item.primary_color}
              title={item.title}
              subtitle={item.desc || ""}
              ImgUrl={item.attachment}
              ios_link={item.ios_link}
              web_link={item.web_link}
              android_link={item.android_link}
            />
          ))
        )}
      </motion.div>
      {/* <PortfolioCard
          ImgUrl={ImgUrl}
          mainBgColor={`bg-[#716242]`}
          primaryBgColor={`bg-[#483E28]`}
          title={" We helped boost sales"}
          subtitle={
            "We digitised Costa Coffee in Bahrain and increased their sales"
          }
        />
        <PortfolioCard
          ImgUrl={ImgUrl2}
          mainBgColor={`bg-[#2F6CAD]`}
          primaryBgColor={`bg-[#1C446E]`}
          title={" We transformed food delivery"}
          subtitle={
            "We built the complete range of solutions for Halal food delivery in the UK."
          }
        />
        <PortfolioCard
          ImgUrl={ImgUrl3}
          mainBgColor={`bg-[#E34380]`}
          primaryBgColor={`bg-[#9B2F58]`}
          title={"We pioneered smart shopping"}
          subtitle={
            "We helped SmartSanta build an AI based e-commerce app fuelled by influencers."
          }
        /> */}

      {/* <PortfolioWrapper>
        <PortfolioCard />
        {PortfolioData.data.map((item, index) => (
          <PortfolioCard state={item} />
        ))}
      </PortfolioWrapper> */}
      {/* <Note /> */}
      {/* <ContactCard /> */}
    </div>
  );
};

export default Portfolio;
