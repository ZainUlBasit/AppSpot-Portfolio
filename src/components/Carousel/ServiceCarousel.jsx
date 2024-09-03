import React from "react";
import { TargetMarketsData } from "./TargetMarketsData";
import CarasolCard from "./CarasolCard";

const ServiceCarousel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 2xl:gap-y-[80px] place-items-center justify-around w-full px-4 py-10">
      {TargetMarketsData.map((dt, i) => (
        <CarasolCard key={i} service={dt} />
      ))}
    </div>
  );
};

export default ServiceCarousel;
