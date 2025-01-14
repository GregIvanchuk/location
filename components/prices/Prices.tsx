import { FC, useState } from "react";
import { PricesSection } from "@/types/pricesDataType";
import { Waypoint } from "react-waypoint";

interface PricesProps {
  pricesData: PricesSection;
}

const Prices: FC<PricesProps> = ({ pricesData }) => {
  const [isVisiblePrices, setIsVisiblePrices] = useState(false);

  return (
    <section id="prices" className="bg-green-900">
      <div className="container mb-5 lg:mb-7">
        <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-18'>
            <h2 className="title">
              {pricesData.sectionTitle}
            </h2>
            <p className="max-w-2xl">
              {pricesData.sectionSubtitle}
            </p>
        </div>
          <div
            className={`bg-green-950 rounded-lg grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 shadow-md `}
          >
            {pricesData.prices.map(({ id, title, description, price }) => (
              <Waypoint
                key={id}
                onEnter={() => setIsVisiblePrices(true)} 
                bottomOffset="20%"
              >
                <div
                  className={`${
                    isVisiblePrices
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  } p-6 transition-all duration-1000`}
                >
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-md mb-4 font-Lobster">{description}</p>
                  <p className="text-lg text-yellow-500 font-semibold">{price}</p>
                </div>
              </Waypoint>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Prices;
