


import React from "react";
import Button from "../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Assets from "../../common/Assets";
import './socialmedia.scss';
import InstaIcon from "../InstaIcon/InstaIcon";
import { Autoplay } from "swiper/modules";

const socialMediaData = [
  { id: 1, image: Assets.sliderImg1 },
  { id: 2, image: Assets.sliderImg2 },
  { id: 3, image: Assets.sliderImg3 },
  { id: 4, image: Assets.testimonials },
  { id: 5, image: Assets.sliderImg1 },
  { id: 6, image: Assets.sliderImg2 },
  { id: 7, image: Assets.sliderImg3 },
  { id: 8, image: Assets.testimonials },
];

const SocialMedia = () => {
  return (
    <div className="socialmedia py-[60px] 3xl:py-[130px] overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center md:justify-between pb-[50px]">
          <h5 className="font-Silk md:font-Cormorant font-extralight md:font-normal 3xl:font-normal text-40 md:text-50 xl:text-h5  leading-[50px] md:leading-[55px] xl:leading-[68px] 3xl:leading-[68px] lg:max-w-full xl:max-w-[475px] 3xl:max-w-[475px] text-center md:text-left pb-[15px] md:pb-0">
            FOLLOW LET THE MAGIC BEGIN
          </h5>
          <div className="flex justify-center items-center">
            <Button variant="secondary" classNames={'w-full sm:w-auto !h-[49px]'} icon={<InstaIcon />}>Follow @ Symphony</Button>
          </div>
        </div>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}      
          className="socialMedia-Swipper overflow-visible"
          pagination={{
            clickable: false,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 3.5,
            },
          }}
        >
          {socialMediaData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="max-w-[350px] w-full">
                <figure className="relative pb-[100%]">
                  <img src={item.image} alt="img"/>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SocialMedia;


