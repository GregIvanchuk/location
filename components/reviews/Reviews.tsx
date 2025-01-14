import { FC } from "react";
import { ReviewSection } from "@/types/reviewDataType"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/pagination";

interface ReviewsProps {
  reviewsData: ReviewSection;  
}

const Reviews: FC<ReviewsProps> = ({ reviewsData }) => {
  return (
    <section id="reviews">
      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">{reviewsData.sectionTitle}</h2>
        <p className="max-w-2xl">{reviewsData.sectionSubtitle}</p>
      </div>
      <div className="container">
        <Swiper
          className="space-y-16"
          modules={[Pagination, Autoplay]}
          speed={400}
          spaceBetween={30} 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          slidesPerView={1} 
          navigation 
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1180: { slidesPerView: 3 },
          }}
        >
          {reviewsData.reviews.map(({ id, text, name, role, imageUrl }) => (
            <SwiperSlide key={id}>
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className="font-Lobster">{text}</p>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={imageUrl}
                    alt="review"
                    width={100}
                    height={100}
                  />
                  <div className="ml-3">
                    <p className="text-yellow-500 uppercase">{name}</p>
                    <p>{role}</p>
                  </div>
                  <i className="ri-double-quotes-r ml-auto text-4xl"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
