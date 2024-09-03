import OfferCard from "../Card/OfferCard";
import { motion } from "framer-motion";

const CardWrapper = () => {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9, // Set the duration for the container animation
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full mx-auto p-4 bg-black py-10">
      <div className="flex flex-col items-center justify-center gap-4 px-3">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 justify-center"
        >
          <OfferCard
            align="l"
            text="Proven track record of delivering high-quality solutions"
          />
          <OfferCard align="r" text="On-time delivery and meeting deadlines" />
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 justify-center"
        >
          <OfferCard align="l" text="Dedication to customer satisfaction" />
          <OfferCard
            align="r"
            text="Customized solutions to meet unique client requirements"
          />
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 justify-center"
        >
          <OfferCard
            align="l"
            text="Knowledgeable in the latest technologies and tools"
          />
          <OfferCard
            align="r"
            text="Flexible and adaptable to changing project needs"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default CardWrapper;
