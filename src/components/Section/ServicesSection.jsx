import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Heading from "../../assets/images/uiux.png";

const ServicesSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="bg-black text-white relative font-spartan">
      <div className="flex justify-end w-[85%] pt-12">
        <div
          className="hidden lg:flex items-center justify-center w-fit rounded-lg bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] cursor-pointer"
          onClick={toggleDropdown}
        >
          <button className="inline-block px-3 py-2 font-semibold text-white">
            Services
          </button>
          {dropdownOpen ? (
            <IoIosArrowUp size={25} className="pr-2" />
          ) : (
            <IoIosArrowDown size={25} className="pr-2" />
          )}
        </div>
        {dropdownOpen && (
          <div className="absolute top-[84px] mt-2 py-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded shadow-lg w-48 max-h-36 overflow-y-auto">
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              UI/UX Design
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              UI/UX Design
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              UI/UX Design
            </a>
          </div>
        )}
      </div>
      <div>
        <img src={Heading} alt="Heading" className="w-36 sm:w-44 lg:w-80" />
        <div className="px-4 sm:px-6 lg:px-14">
          <h1 className="text-lg lg:text-4xl font-bold -mt-4 lg:-mt-9">
            UI/UX Design
          </h1>
          <p className="text-base lg:text-lg w-[90%]">
            At AppSpot, our design team is passionate about creating stunning,
            user-centric designs that captivate your audience and elevate your
            brand. We believe that great design is not just about aesthetics;
            it's about creating seamless and intuitive user experiences.
          </p>
          <button className="bg-gray-800 text-white py-1 px-3 my-2 lg:py-2 lg:px-4 rounded lg:my-4 ">
            Our design services include:
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
