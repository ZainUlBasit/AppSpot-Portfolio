import React from "react";
import HomeHeader from "../components/Header/HomeHeader";
import ServiceCarousel from "../components/Carousel/ServiceCarousel";
import ProjectSection from "../components/Section/ProjectSection";
import CardWrapper from "../components/Wrapper/CardWrapper";
import Note from "../components/Section/Note";
import ContactCard from "../components/Card/ContactCard";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <HomeHeader />
      <ServiceCarousel />
      <ProjectSection />
      <CardWrapper />
      <Note />
      <ContactCard />
    </div>
  );
};

export default Home;
