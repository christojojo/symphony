import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Assets from "../../common/Assets";
import Button from "../Button/Button";

const Testimonials = () => {
  return (
    <div className="bg-grey py-[150px] font-Cormorant">
      <div className="container">
        <div className="pb-[80px]">
          <h5 className="text-h5 leading-[69px] text-center">TESTIMONIALS</h5>
        </div>
        <div className="flex">
          <div className="w-[41%] pr-[77.5px]">
            <div className="swiper-container ">
              <Swiper className="testimonial-swiper-1">
                <SwiperSlide>
                  <div className="max-w-[536px]">
                    <figure className="relative pb-[122.94%]">
                      <img
                        src={Assets.testimonials}
                        alt="testimonialsImg"
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </figure>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-[536px]">
                    <figure className="relative pb-[122.94%]">
                      <img
                        src={Assets.testimonials}
                        alt="testimonialsImg"
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </figure>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-[536px]">
                    <figure className="relative pb-[122.94%]">
                      <img
                        src={Assets.testimonials}
                        alt="testimonialsImg"
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </figure>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-[59%] pl-[77.5px] ">
            <div className="swiper-container">
              <Swiper
                pagination={true}
                modules={[Pagination,Autoplay]}
                className="testimonial-swiper-2 pb-[124px]"    
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <div className="pt-[46px]">
                    <div className="pb-[35px]">
                      <figure>
                        <img src={Assets.quotesImg} alt="quotesimg" />
                      </figure>
                    </div>
                    <p className=" text-40 font-light leading-[50px] max-w-[673px] pb-[55px]">
                      Symphony Events were absolutely our the incredible right
                      through the process from our first meeting to execution…
                    </p>
                    <div className="">
                      <h6 className="text-25 font-semibold leading-[30px]">
                        Ana John & Juan Luis
                      </h6>
                      <span className="block text-20 leading-[30px]">
                        Sydney - Australia
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pt-[46px]">
                    <div className="pb-[35px]">
                      <figure>
                        <img src={Assets.quotesImg} alt="" />
                      </figure>
                    </div>
                    <p className=" text-40 font-light leading-[50px] max-w-[673px] pb-[55px]">
                      Symphony Events were absolutely our the incredible right
                      through the process from our first meeting to execution…
                    </p>
                    <div className="">
                      <h6 className="text-25 font-semibold leading-[30px]">
                        Ana John & Juan Luis
                      </h6>
                      <span className="block text-20 leading-[30px]">
                        Sydney - Australia
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="pt-[46px]">
                    <div className="pb-[35px]">
                      <figure>
                        <img src={Assets.quotesImg} alt="" />
                      </figure>
                    </div>
                    <p className=" text-40 font-light leading-[50px] max-w-[673px] pb-[55px]">
                      Symphony Events were absolutely our the incredible right
                      through the process from our first meeting to execution…
                    </p>
                    <div className="">
                      <h6 className="text-25 font-semibold leading-[30px]">
                        Ana John & Juan Luis
                      </h6>
                      <span className="block text-20 leading-[30px]">
                        Sydney - Australia
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <Button variant="secondary" classNames={"bg-grey "}>
              View All Testimonials
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
