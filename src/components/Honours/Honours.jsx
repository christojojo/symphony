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
    <div className="py-[60px] 3xl:py-[132px] bg-white honours">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center md:justify-between pb-[0px] md:pb-[58px] 3xl:pb-[58px]">
          <h5 className="font-Silk 3xl:font-Cormorant font-extralight 3xl:font-normal text-40 md:text-h5 leading-[50px] max-w-[672px] text-center md:text-left pb-[20px] md:pb-0">
            Numerous Honors & recognition
          </h5>
          <div className="hidden md:flex justify-center items-center">
            <Button variant="secondary">Know More</Button>
          </div>
        </div>

        <div>
        <Swiper 
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="honour-swiper pb-0 md:pb-[86px]"
          breakpoints={{
            // When the viewport is at least 320 pixels wide
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            // When the viewport is at least 768 pixels wide
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            }
            
          }}
        >
          <SwiperSlide>
            <div className="px-[35px] pt-[35px] pb-[23px] md:p-10 3xl:p-10 border">
                <div className="max-w-[149px] mx-auto mb-[40px] 3xl:mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour1} alt="" />
                    </figure>
                </div>
                <div className="text-20 md:text-22 leading-[28px] text-center max-w-[226px] mx-auto uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="px-[35px] pt-[35px] pb-[23px] md:p-10 3xl:p-10 border">
                <div className="max-w-[149px] mx-auto mb-[40px] 3xl:mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour2} alt="" />
                    </figure>
                </div>
                <div className="text-20 md:text-22 leading-[28px] text-center max-w-[226px] mx-auto uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="px-[35px] pt-[35px] pb-[23px] md:p-10 3xl:p-10 border">
                <div className="max-w-[149px] mx-auto mb-[40px] 3xl:mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour2} alt="" />
                    </figure>
                </div>
                <div className="text-20 md:text-22 leading-[28px] text-center max-w-[226px] mx-auto uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="px-[35px] pt-[35px] pb-[23px] md:p-10 3xl:p-10 border">
                <div className="max-w-[149px] mx-auto mb-[40px] 3xl:mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour1} alt="" />
                    </figure>
                </div>
                <div className="text-20 md:text-22 leading-[28px] text-center max-w-[226px] mx-auto uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="px-[35px] pt-[35px] pb-[23px] md:p-10 3xl:p-10 border">
                <div className="max-w-[149px] mx-auto mb-[40px] 3xl:mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour2} alt="" />
                    </figure>
                </div>
                <div className="text-20 md:text-22 leading-[28px] text-center max-w-[226px] mx-auto uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="px-[35px] pt-[35px] pb-[23px] md:p-10 3xl:p-10 border">
                <div className="max-w-[149px] mx-auto mb-[40px] 3xl:mb-10">
                    <figure className="relative pb-[98.58%]">
                        <img src={Assets.honour2} alt="" />
                    </figure>
                </div>
                <div className="text-20 md:text-22 leading-[28px] text-center max-w-[226px] mx-auto uppercase">ABIA Wedding Stylist Winner 2023</div>
            </div>
          </SwiperSlide>
         
        </Swiper>
        </div>
        <div className="mt-[50px] md:hidden">
          <Button variant="secondary" classNames={'w-full !text-18 !leading-[19px] h-[49px]'}>KNOW MORE</Button>
        </div>
      </div>
    </div>
  );
};

export default Honours;
