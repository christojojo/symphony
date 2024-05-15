import React from "react";
import Button from "../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Assets from "../../common/Assets";
import './socialmedia.scss';

const SocialMedia = () => {
  return (
    <div className="socialmedia py-[60px] 3xl:py-[130px]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center md:justify-between pb-[50px]">
          <h5 className="font-Silk md:font-Cormorant font-extralight md:font-normal 3xl:font-normal text-40 md:text-50 xl:text-h5  leading-[50px] md:leading-[55px] xl:leading-[68px] 3xl:leading-[68px] lg:max-w-full xl:max-w-[475px] 3xl:max-w-[475px] text-center md:text-left pb-[15px] md:pb-0">
            FOLLOW LET THE MAGIC BEGIN
          </h5>
          <div className="flex justify-center items-center">
            <Button variant="secondary" icon={Assets.instaIcon} classNames={'w-full sm:w-auto'}>Follow @ Symphony</Button>
          </div>
        </div>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={20}      
          className="socialMedia-Swipper"
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            // When the viewport is at least 320 pixels wide
            320: {
              slidesPerView: 1.5,
            },
            // When the viewport is at least 768 pixels wide
            768: {
              slidesPerView: 3.5,
            },
          }}
        >
          <SwiperSlide>
            <div className="max-w-[350px] w-full">
              <figure className="relative pb-[100%]">
                <img src={Assets.sliderImg1} alt=""/>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-[350px] w-full">
              <figure className="relative pb-[100%]">
                <img src={Assets.sliderImg2} alt=""/>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-[350px] w-full">
              <figure className="relative pb-[100%]">
                <img src={Assets.sliderImg3} alt=""/>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-[350px] w-full">
              <figure className="relative pb-[100%]">
                <img src={Assets.testimonials} alt=""/>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-[350px] w-full">
              <figure className="relative pb-[100%]">
                <img src={Assets.sliderImg1} alt=""/>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-[350px] w-full">
              <figure className="relative pb-[100%]">
                <img src={Assets.sliderImg2} alt=""/>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-[350px] w-full">
              <figure className="relative pb-[100%]">
                <img src={Assets.sliderImg3} alt=""/>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-[350px] w-full">
              <figure className="relative pb-[100%]">
                <img src={Assets.testimonials} alt=""/>
              </figure>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default SocialMedia;
