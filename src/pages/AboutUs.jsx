import React, { useEffect } from "react";
import MainHeader from "../components/Header/MainHeader";
import AboutHeroImg from "../assets/images/AboutHeroImg.png";
import About1 from "../assets/images/AboutUs1.svg";
import About2 from "../assets/images/Appmission.svg";
// import AboutReg1 from "../assets/images/AboutReg1.png";
// import AboutReg2 from "../assets/images/AboutReg2.png";
// import AboutReg3 from "../assets/images/AboutReg3.png";
// import AboutReg4 from "../assets/images/AboutReg4.png";
import AboutUS2 from "../assets/images/About2.png";
import About3 from "../assets/images/About3.png";
import AboutusSection from "../components/Section/AboutusSection";
import TestimonialCard from "../components/Card/TestimonialCard";
import { useParams } from "react-router-dom";
import profileImage1 from "../assets/images/faizan.png";
import profileImage2 from "../assets/images/shujaat.png";
import profileImage3 from "../assets/images/subhan.png";
import CardImg1 from "../assets/images/Tcard1.png";
import CardImg2 from "../assets/images/Tcard2.png";
import CardImg3 from "../assets/images/Tcard3.png";
import ContactCard from "../components/Card/ContactCard";
import AboutHeader from "../components/Header/AboutHeader";
import AOS from "aos";

const testimonials = [
  {
    name: "Fahad Hussain",
    title: "Chief Technology Officer",
    text: "As our CTO, Fahad Hussain drives innovation and strategic tech initiatives. His expertise ensures we stay ahead with cutting-edge solutions",
    avatar: profileImage1,
    CardImg: CardImg1,
  },
  {
    name: "Arbab Shujaat",
    title: "Chief Executive Officer",
    text: "As our CEO, Arbab Shujaat sets the vision and leads our company to success. His leadership and dedication inspire our team",
    avatar: profileImage2,
    CardImg: CardImg2,
  },
  {
    name: "Subhan Ali",
    title: "Chief Operating Officer",
    text: "As our COO, Subhan Ali oversees operations and ensures organizational efficiency. His strategic leadership drives our operational excellence",
    avatar: profileImage3,
    CardImg: CardImg3,
  },
];
const AboutUs = () => {
  const { id } = useParams();
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set a default duration for animations
  }, []);

  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      <MainHeader
        subheading="Who we are"
        HeroImg={AboutHeroImg}
        title="About Us"
        subtitle="A team of Creative Minds designing best Apps and Website for the World."
        path={id ? "Home/About Us" : "Home/About Us"}
      />
      <div className="flex w-full justify-end items-start">
        <AboutusSection
          align="left"
          title="About Company"
          subtitle="At AppSpot, we are a team of passionate software developers who are
            committed to delivering exceptional results. With years of
            experience, we provide customized software solutions that help our
            clients achieve their business objectives. Our approach is rooted in
            a commitment to quality, reliability, and scalability. We strive to
            build long-term relationships with our clients, providing ongoing
            support and maintenance to ensure their software solutions continue
            to meet their evolving needs."
          className={`w-full px-8 mmd:px-0 mmd:pr-4 mmd:w-[50%]`}
        />
      </div>

      <div
        className={` w-[100%] h-[100%] flex flex-wrap gap-8 px-8 text-white font-spartan`}
      >
        <div className="w-full mmd:w-[48%]">
          <AboutusSection
            align="right"
            Heading={About1}
            title="AppSpot Vision"
            subtitle="Our vision is to provide innovative software solutions that empower businesses to achieve their goals and exceed their customers' expectations. We aim to be the leading software development company, recognized for our exceptional quality, exceptional service, and commitment to excellence. Our portfolio showcases our expertise and passion for software development, demonstrating how we leverage the latest technologies and best practices to deliver solutions that are scalable, reliable, and secure. By partnering with us, our clients can harness the power of software to drive growth, streamline operations, and enhance customer experiences."
          />
        </div>
        <div className="w-full mmd:w-[48%]">
          <AboutusSection
            align="left"
            Heading={About2}
            title="AppSpot Mission"
            subtitle="Our mission is to provide our clients with customized, high-quality software solutions that help them achieve their business objectives. We are committed to delivering exceptional service, leveraging our technical expertise and innovative approach to software development. Our team is passionate about technology and takes pride in delivering reliable, scalable, and secure software solutions that exceed our client's expectations. We strive to build long-term relationships with our clients, working collaboratively to understand their unique needs and challenges. At the heart of our mission is a dedication to delivering value, ensuring that our clients receive the maximum return on their investment in software development."
          />
        </div>
      </div>
      <div className="relative bg-black w-full h-fit my-16 overflow-hidden">
        <img
          src={About3}
          alt=""
          className="opacity-20
          h-96 xsm:h-[22rem] w-[100%] sm:h-80 md:h-96 lg:h-[20rem] xl:h-[24rem] 2xl:h-[28rem] object-cover z-50"
        />
        <div
          className="absolute top-0 bottom-0 flex-col flex justify-center items-center font-spartan h-full w-full bg-transparent"
          data-aos="zoom-out-down"
        >
          <h1 className="py-4 font-bold text-base xsm:text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-white bg-transparent">
            AppSpot Vision
          </h1>
          <p
            className="
          w-[80%] text-xs xsm:text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-thin text-white sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] text-center bg-transparent"
          >
            Our vision is to provide innovative software solutions that empower
            businesses to achieve their goals and exceed their customers'
            expectations. We aim to be the leading software development company,
            recognized for our exceptional quality, exceptional service, and
            commitment to excellence. Our portfolio showcases our expertise and
            passion for software development, demonstrating how we leverage the
            latest technologies and best practices to deliver solutions that are
            scalable, reliable, and secure. By partnering with us, our clients
            can harness the power of software to drive growth, streamline
            operations, and enhance customer experiences.
          </p>
        </div>
      </div>
      {/* bg-[#0f0B07]  */}
      <div className="w-full flex flex-col justify-center items-center bg-transparent">
        <div
          className="w-[80%] text-center text-white text-xl xsm:text-2xl sm:text-3xl lg:text-4xl gap-x-2 font-bold bg-transparent"
          style={{ backgroundColor: "transparent" }}
          data-aos="flip-down"
        >
          <div className="z-10 mb-[5rem]">
            Meet Our
            <span className="text-transparent bg-clip-text bg-main pl-2">
              Executive Trio
            </span>
          </div>
          <div
            className=" flex flex-wrap gap-4 items-center justify-center pt-20 z-10"
            style={{ backgroundColor: "transparent" }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                Index={index}
                name={testimonial.name}
                CardImg={testimonial.CardImg}
                title={testimonial.title}
                text={testimonial.text}
                avatar={testimonial.avatar}
                key={index}
              />
            ))}
          </div>
        </div>

        {/* <div className="w-[90%] bg-[#141414]  p-8 rounded-lg flex justify-between items-center mb-16 md:flex-row gap-7 flex-col">
          <img src={Logo} alt="" />
          <p className="font-normal text-lg md:text-xl text-[#98989A] w-1/2">
            We invite you to join us on our journey and discover how we can help
            bring your digital ideas to life.
          </p>
          <a href="/#contact">
            <button className="bg-[#FE966F] px-6 py-3 rounded-lg text-white font-semibold md:text-xl text-lg">
              Contact Us
            </button>
          </a>
        </div> */}
      </div>
      <ContactCard />
    </div>
  );
};

export default AboutUs;
