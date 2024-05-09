import React from "react";
import Button from "../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Assets from "../../common/Assets";
import "../Blogs/Blogs.scss";

const Blogs = () => {
  return (
    <div className="blogs pt-[42px] pb-[60px] md:pt-[80px] md:pb-[60px] 3xl:py-[140px] bg-grey">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center md:justify-between pb-[30px] md:pb-[45px] 3xl:pb-[55px]">
          <h5 className="font-Silk md:font-Cormorant font-extralight md:font-normal text-40 md:text-h5 xl:text-h3 leading-[60px] md:leading-[80px] 3xl:leading-[80px]">
            Blogs
          </h5>
          <div className="hidden md:flex justify-center items-center ">
            <Button variant="secondary" classNames={"bg-transparent"}>
              View All
            </Button>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            // When the viewport is at least 320 pixels wide
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.5,
            },
            // When the viewport is at least 768 pixels wide
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="group">
              <div className=" w-full">
                <figure className="relative pb-[70.68%] overflow-hidden">
                  <img
                    src={Assets.sliderImg1}
                    alt="sliderimg"
                    className="transition-all duration-500 ease-in-out group-hover:scale-125"
                  />
                </figure>
              </div>
              <span className="block mt-[25px] md:mt-[30px] pb-[20px] text-16 ">
                January 18, 2024
              </span>
              <div className="text-25 md:text-28 font-Silk md:font-Cormorant leading-[35px] font-normal min-h-[70px]">
                Spring Groom Wedding Style Inspiration…
              </div>
              <div className="mt-[38px]">
                <Button
                  variant="secondary"
                  classNames={
                    "max-w-full w-full bg-grey !text-18 !leading-[19px] h-[49px] sm:hidden"
                  }
                >
                  VIEW ALL
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="group">
              <div className="w-full">
                <figure className="relative pb-[70.68%] overflow-hidden">
                  <img
                    src={Assets.sliderImg2}
                    alt="sliderimg"
                    className="transition-all duration-500 ease-in-out group-hover:scale-125"
                  />
                </figure>
              </div>
              <span className="block mt-[25px] md:mt-[30px] pb-[20px] text-16 ">
                January 18, 2024
              </span>
              <div className="text-25 md:text-28 font-Silk md:font-Cormorant leading-[35px] font-normal min-h-[70px]">
              Real Wedding: Mimi & Kelvin
              </div>
              <div className="mt-[38px]">
                <Button
                  variant="secondary"
                  classNames={
                    "max-w-full w-full bg-grey !text-18 !leading-[19px] h-[49px] sm:hidden"
                  }
                >
                  VIEW ALL
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="group">
              <div className=" w-full">
                <figure className="relative pb-[70.68%] overflow-hidden">
                  <img
                    src={Assets.sliderImg3}
                    alt="sliderimg"
                    className="transition-all duration-500 ease-in-out group-hover:scale-125"
                  />
                </figure>
              </div>
              <span className="block mt-[25px] md:mt-[30px] pb-[20px] text-16 ">
                January 18, 2024
              </span>
              <div className="text-25 md:text-28 font-Silk md:font-Cormorant leading-[35px] font-normal min-h-[70px]">
              Did you have any special performances or entertainment?
              </div>
              <div className="mt-[38px]">
                <Button
                  variant="secondary"
                  classNames={
                    "max-w-full w-full bg-grey !text-18 !leading-[19px] h-[49px] sm:hidden"
                  }
                >
                  VIEW ALL
                </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
