import React from "react";
import MainHeader from "../components/Header/MainHeader";
import ServiceCarousel from "../components/Carousel/ServiceCarousel";
import Note from "../components/Section/Note";
import ContactCard from "../components/Card/ContactCard";
import ServiceImg from "../assets/images/services.png";
import { useParams } from "react-router-dom";

const Services = () => {
  const { id } = useParams();
  return (
    <>
      {/* <Navbar /> */}
      <MainHeader
        HeroImg={ServiceImg}
        title="Services"
        subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        path={id ? "Home/services/UI/UX" : "Home/services"}
      />
      <ServiceCarousel />
      <Note />
      <ContactCard />
    </>
  );
};

export default Services;
