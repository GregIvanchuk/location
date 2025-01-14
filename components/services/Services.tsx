import { FC } from "react";
import React from "react";
import { Service } from "@/types/serviceDataType";
import { Waypoint } from 'react-waypoint';

interface ServicesProps {
  servicesData: Service[];
}

const Services: FC<ServicesProps> = ({ servicesData }) => {
  return (
    <div className="bg-white text-green-900 py-20">
      <div className="container w-full grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 ">
        {servicesData.map(({ id, iconClass, title, description }) => (
          <InViewAnimation key={id}>
            <div className="border border-green-900 p-5 cursor-pointer rounded-md space-y-5">
              <div className="flex items-center gap-5">
                <i className={`${iconClass} text-3xl md:text-4xl xl:text-5xl`} />
                <p className="md:text-lg font-bold">{title}</p>
              </div>
              <p className="font-Lobster">{description}</p>
            </div>
          </InViewAnimation>
        ))}
      </div>
    </div>
  );
};

const InViewAnimation = ({ children }: { children: React.ReactNode }) => {
  const [inView, setInView] = React.useState(false);

  const handleWaypointEnter = () => {
    if (!inView) {
      setInView(true); 
    }
  };

  return (
    <Waypoint
      onEnter={handleWaypointEnter}
      topOffset="50%"  
    >
      <div
        className={`transition-all duration-1000 easy-in-out transform ${
          inView
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-10'  
        }`}
      >
        {children}
      </div>
    </Waypoint>
  );
};

export default Services;
