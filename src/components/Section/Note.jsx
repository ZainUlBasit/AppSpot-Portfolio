import { useEffect } from "react";
import NoteImg from "../../assets/images/note1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Note = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set a default duration for animations
  }, []);
  return (
    <div className="note-bg relative h-48 xsm:h-48 w-full sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-72">
      <div className="note-bg absolute top-0 bottom-0 flex-col w-[100%] flex justify-center items-center font-spartan">
        <h1
          className="bg-transparent font-bold font-spartan text-base xsm:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-white px-2"
          data-aos="fade-up"
        >
          Thank you for your Interest in AppSpot
        </h1>
        <p
          className="w-[80%] text-base xsm:text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal text-white sm:w-[55%] md:w-[55%] lg:w-[55%] xl:w-[60%] 2xl:w-[60%] text-center bg-transparent"
          data-aos="fade-up"
        >
          We would love to hear from you and discuss how we can help bring your
          digital ideas to life. Here are the different ways you can get in
          touch with us.
        </p>
      </div>
    </div>
  );
};

export default Note;
