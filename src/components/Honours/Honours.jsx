import React from "react";
import Button from "../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import Assets from "../../common/Assets";
import '../Honours/Honours.scss'

const Honours = () => {
  return (
    <div className="py-[132px] bg-white honours">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center md:justify-between pb-[58px]">
          <h5 className="font-Silk 3xl:font-Cormorant font-extralight 3xl:font-normal text-40 md:text-h5 leading-[50px] max-w-[672px] text-center md:text-left pb-[15px] md:pb-0">
            Numerous Honors & recognition
          </h5>
          <div className="hidden md:flex justify-center items-center">
            <Button variant="secondary">Know More</Button>
          </div>
        </div>

        <div>
        <Swiper 
          slidesPerView={4}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            // When the viewport is at least 320 pixels wide
            320: {
              slidesPerView: 1.5,
            },
            // When the viewport is at least 768 pixels wide
            768: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className=" p-10 border">
                <div className="max-w-[173px] mx-auto mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour1} alt="" />
                    </figure>
                </div>
                <div className="text-22 leading-[26px] text-center max-w-[250px] uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" p-10 border">
                <div className="max-w-[173px] mx-auto mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour2} alt="" />
                    </figure>
                </div>
                <div className="text-22 leading-[26px] text-center max-w-[250px] uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" p-10 border">
                <div className="max-w-[173px] mx-auto mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour2} alt="" />
                    </figure>
                </div>
                <div className="text-22 leading-[26px] text-center max-w-[250px] uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" p-10 border">
                <div className="max-w-[173px] mx-auto mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour1} alt="" />
                    </figure>
                </div>
                <div className="text-22 leading-[26px] text-center max-w-[250px] uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" p-10 border">
                <div className="max-w-[173px] mx-auto mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour2} alt="" />
                    </figure>
                </div>
                <div className="text-22 leading-[26px] text-center max-w-[250px] uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" p-10 border">
                <div className="max-w-[173px] mx-auto mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour2} alt="" />
                    </figure>
                </div>
                <div className="text-22 leading-[26px] text-center max-w-[250px] uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" p-10 border">
                <div className="max-w-[173px] mx-auto mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour1} alt="" />
                    </figure>
                </div>
                <div className="text-22 leading-[26px] text-center max-w-[250px] uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" p-10 border">
                <div className="max-w-[173px] mx-auto mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour1} alt="" />
                    </figure>
                </div>
                <div className="text-22 leading-[26px] text-center max-w-[250px] uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
         
         
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Honours;
