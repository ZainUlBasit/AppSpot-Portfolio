import React, { useEffect, useState } from "react";
import MainHeader from "../components/Header/MainHeader";
import CheroImg from "../assets/images/CheroImg.png";
import Heading from "../assets/images/case1.png";
import App from "../assets/images/App.png";
import Google from "../assets/images/Google.png";
import SmallHeading from "../assets/images/vPmbl.png";
import LargeHeading from "../assets/images/Heading1.png";
import Heading2 from "../assets/images/Heading2.png";
import Heading3 from "../assets/images/Heading3.png";
import Heading4 from "../assets/images/Heading4.png";
import case3 from "../assets/images/case3.png";
import case3Mbl from "../assets/images/case3Mbl.png";
import case2 from "../assets/images/case2.png";
import TextSection from "../components/Section/TextSection";
import Note from "../components/Section/Note";
import ContactCard from "../components/Card/ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolios } from "../store/Slices/PortfolioSlice";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
const CaseStudy = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const PortfolioData = useSelector((state) => state.PortfolioState);
  console.log("portfolioDta", PortfolioData);

  useEffect(() => {
    dispatch(fetchPortfolios());
  }, []);
  const [BgImg, setBgImg] = useState(case3);
  const pro = "Wias Project";
  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 640) {
        setBgImg(case3Mbl);
      } else {
        setBgImg(case3);
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);

    return () => {
      window.removeEventListener("resize", updateImage);
    };
  }, [case3, case3Mbl]);
  return PortfolioData.loading ? (
    <Loader />
  ) : (
    PortfolioData.data
      .filter((item) => item._id === id)
      .map((item) => {
        return (
          <div className="bg-[#0F0B07]">
            {/* <Navbar /> */}
            <MainHeader
              HeroImg={CheroImg}
              title={`Case Study of ${item.title}`}
              subtitle="Explore a detailed case study of our well-crafted digital projects that demonstrate our creativity and expertise."
              path="Home/Portfolio/Wias Project"
            />
            <div className="pt-16 pb-2">
              <TextSection
                largeImg={Heading}
                smallImg={Heading}
                title="Project Overview"
                subTitle={item.overview}
              />

              <div className="px-14 w-full h-full py-8 bg-[#0F0B07]">
                <div className="w-full h-60 sm:h-[500px] mb-4">
                  <img
                    src={item.attachment}
                    alt=""
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex justify-end w-full gap-3 sm:gap-5 sm:pt-4">
                  <button className="w-48 h-12 sm:w-60 sm:h-16">
                    <img
                      src={Google}
                      alt=""
                      className="w-full h-full rounded-md object-contain"
                    />
                  </button>
                  <button className="w-48 h-12 sm:w-60 sm:h-16">
                    <img
                      src={App}
                      alt=""
                      className="w-full h-full rounded-md  object-contain"
                    />
                  </button>
                </div>
              </div>
              <TextSection
                largeImg={LargeHeading}
                smallImg={SmallHeading}
                title="Validating the Problem"
                subTitle={item.validating_the_problem}
                className="w-72 text-xl -mt-[16px] sm:w-96"
              />
              <TextSection
                largeImg={Heading2}
                smallImg={Heading2}
                title="Solution"
                subTitle={item.solution}
                className="w-40 text-3xl sm:text-5xl -mt-[16px] sm:w-48 sm:-mt-[14px]"
              />
            </div>
            <div className="flex justify-center items-center w-full flex-col ">
              <div className="text-white font-spartan ">
                <img src={Heading3} alt="Heading" className="w-80" />

                <h1
                  className={`text-4xl text-center font-semibold w-80 -mt-4 text-white pb-5`}
                >
                  Overall Process
                </h1>
              </div>
              <img src={BgImg} alt="Heading" className="w-24 h-1/6 sm:w-2/3" />
            </div>
            <div className="flex justify-center items-center w-full flex-col py-20">
              <div className="text-white font-spartan flex justify-center items-center w-full flex-col ">
                <img src={Heading4} alt="Heading" className="w-60" />

                <h1
                  className={`text-[44px] text-center font-semibold w-96 -mt-7 text-white pb-5`}
                >
                  User Flow
                </h1>
              </div>
              <div className="relative bg-black w-full h-full">
                <img
                  src={case2}
                  alt=""
                  className="w-full h-full object-cover opacity-20"
                />

                <div className="absolute pl-8 bottom-0 lg:pl-96 flex flex-col h-full w-full py-6">
                  <img
                    src={item.overflow}
                    alt=""
                    className="w-full h-full object-contain flex text-center"
                  />
                </div>
              </div>
            </div>
            <Note />
            <ContactCard />
          </div>
        );
      })
  );
};

export default CaseStudy;
{
  /* <Link
to={`/portfolio/casestudy/${state._id}`}
className="w-[100%] lg:w-[48%] md:[40%] xl:[48%] sm:w-[48%] h-96 relative "
>
<img
  src={state.attachment}
  alt=""
  className="w-full h-full object-cover rounded-xl"
/>
<div className="absolute bottom-2 flex justify-between w-full items-center px-4">
  <div className="w-12 h-12 bg-[#262626] rounded-full flex justify-center items-center">
    <img src={state.logo} alt="" className="w-1/2 h-1/2 " />
  </div>
  <div className="bg-[#262626] flex px-3 py-1 text-[#FC9C6E] rounded-lg justify-center items-center gap-1">
    <button className="text-xs lg:text-lg font-semibold font-spartan sm:text-xs">
      View Case Study
    </button>
    <span>
      <MdOutlineArrowOutward />
    </span>
  </div>
</div>
</Link> */
}
