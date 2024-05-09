import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Assets from "../../common/Assets";
import Button from "../Button/Button";

const OurWorks = () => {
  return (
    <div className="pt-[152px] pb-[174px]">
      <div className="container">
        <div className="text-center">
          <span className="block text-18 leading-[19px] pb-[23px]">
            Our works
          </span>
          <h3 className="text-h3 font-Cormorant leading-[80px] pb-[110px] max-w-[761px] mx-auto">
            THE ORCHESTRATING WEDDING CELEBRATION
          </h3>
        </div>
        <div>
          <Swiper className="mySwiper">
            <SwiperSlide>
              <div className="flex">
                <div className="w-[46%] pr-[65px]">
                  <div className="max-w-[536px] w-full">
                    <figure className="relative pb-[118.84%]">
                      <img
                        src={Assets.ourworks1}
                        alt="img"
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </figure>
                  </div>
                </div>
                <div className="flex items-center w-[54%] pl-[65px]">
                  <div className="">
                    <h4 className="text-33 font-Cormorant leading-[40px] pb-[39px] max-w-[346px]">
                      Brenna & Fadell Wedding
                      <span className="text-25">
                        {" "}
                        – Australian Botanic Garden
                      </span>
                    </h4>
                    <p className="max-w-[448px] pb-[47px] text-20 leading-[30px]">
                      Embark on a journey of love as Brenna and Fadell changed
                      vows in their white wedding at the Australian Botanic is a
                      Garden, Mount Annan.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="primary">More Detailes</Button>
                      <Button variant="secondary">View All Works</Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="w-[42%] pr-[65px]">
                  <div className="max-w-[536px] w-full">
                    <figure className="relative pb-[118.84%]">
                      <img
                        src={Assets.ourworks1}
                        alt="img"
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </figure>
                  </div>
                </div>
                <div className="flex items-center w-[58%] pl-[65px]">
                  <div className="">
                    <h4 className="text-33 font-Cormorant leading-[40px] pb-[39px] max-w-[346px]">
                      Brenna & Fadell Wedding
                      <span className="text-25">
                        {" "}
                        – Australian Botanic Garden
                      </span>
                    </h4>
                    <p className="max-w-[448px] pb-[47px] text-20 leading-[30px]">
                      Embark on a journey of love as Brenna and Fadell changed
                      vows in their white wedding at the Australian Botanic is a
                      Garden, Mount Annan.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="primary">More Detailes</Button>
                      <Button variant="secondary">View All Works</Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="w-[42%] pr-[65px]">
                  <div className="max-w-[536px] w-full">
                    <figure className="relative pb-[118.84%]">
                      <img
                        src={Assets.ourworks1}
                        alt="img"
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </figure>
                  </div>
                </div>
                <div className="flex items-center w-[58%] pl-[65px]">
                  <div className="">
                    <h4 className="text-33 font-Cormorant leading-[40px] pb-[39px] max-w-[346px]">
                      Brenna & Fadell Wedding
                      <span className="text-25">
                        {" "}
                        – Australian Botanic Garden
                      </span>
                    </h4>
                    <p className="max-w-[448px] pb-[47px] text-20 leading-[30px]">
                      Embark on a journey of love as Brenna and Fadell changed
                      vows in their white wedding at the Australian Botanic is a
                      Garden, Mount Annan.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="primary">More Detailes</Button>
                      <Button variant="secondary">View All Works</Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
