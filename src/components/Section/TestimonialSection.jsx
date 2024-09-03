import profileImage1 from "../../assets/images/card1Img.jfif"; // Update the path as needed
import CardImg1 from "../../assets/images/Tcard1.png";
import CardImg2 from "../../assets/images/Tcard2.png";
import CardImg3 from "../../assets/images/Tcard3.png";
import TestimonialCard from "../Card/TestimonialCard";
const testimonials = [
  {
    name: "Client",
    title: "App Development & Bug fix",
    text: "Recommend Arbab's service to everyone. Great communication and high-level delivery results!",
    avatar: profileImage1,
    CardImg: CardImg1,
  },
  {
    name: "Client",
    title: "Mobile App development",
    text: "Excellent work done by Shujaat and the team on app analysis and app design work. I highly recommend it for any app development or design work.",
    avatar: profileImage1,
    CardImg: CardImg2,
  },
  {
    name: "Client",
    title: "Commencement of UI",
    text: "Recommend Arbab's service to everyone. Great experience working with Arbab and his team.",
    avatar: profileImage1,
    CardImg: CardImg3,
  },
];
const TestimonialSection = () => {
  return (
    <>
      <div className="w-full mx-auto flex justify-center items-center bg-[#0f0B07]">
        <div className="py-10 flex flex-col select-none w-[90%]">
          <h2 className="text-3xl text-white font-semibold font-spartan mb-4">
            Testimonials
          </h2>
          <h3 className="text-5xl font-bold text-red-500 text-transparent bg-clip-text bg-[#ff916f]">
            Hear <span className="text-white">What</span> They <br />
            Say!
          </h3>
        </div>
      </div>
      <div className="bg-[#0f0B07] flex flex-wrap gap-4 items-center justify-center pt-16">
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
    </>
  );
};

export default TestimonialSection;
