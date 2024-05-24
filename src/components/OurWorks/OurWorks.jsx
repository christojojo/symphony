import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Pagination, Scrollbar } from "swiper/modules";
import Assets from "../../common/Assets";
import Button from "../Button/Button";

const OurWorks = () => {
  return (
    <>
      <div className="py-[60px] md:py-[80px] 3xl:pt-[152px] 3xl:pb-[174px] hidden md:block">
        <div className="container">
          <div className="text-center">
            <span className="block text-18 leading-[19px] pb-[23px]">
              OUR WORKS
            </span>
            <h3 className="text-40 3xl:text-h3 leading-[45px] 3xl:leading-[80px] font-Cormorant  pb-[60px] 3xl:pb-[110px] max-w-[761px] mx-auto">
              THE ORCHESTRATING WEDDING CELEBRATION
            </h3>
          </div>
          <div>
            <Swiper className="mySwiper">
              <SwiperSlide>
                <div className="flex">
                  <div className="w-[46%] pr-[20px] lg:pr-[40px] 3xl:pr-[65px]">
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
                  <div className="flex items-center w-[54%] pl-[20px] lg:pl-[40px] 3xl:pl-[65px]">
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
                        vows in their white wedding at the Australian Botanic is
                        a Garden, Mount Annan.
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
                        vows in their white wedding at the Australian Botanic is
                        a Garden, Mount Annan.
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
                        vows in their white wedding at the Australian Botanic is
                        a Garden, Mount Annan.
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

      <div className="ourworks-responsive block md:hidden">
        <div className="container">
          <div className="py-[60px]">
            <div className="text-16 leading-[18px] pb-[30px] text-center">
              OUR WORKS
            </div>
            <h3 className="font-Silk font-extralight leading-[50px] text-40 text-center pb-[10px]">
              THE ORCHESTRATING WEDDING CELEBRATION
            </h3>
            <div>
              <Swiper
                scrollbar={{
                  hide: true,
                }}
                pagination={
                 { type : 'fraction'}
                }
                modules={[Scrollbar,Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div>
                    <div className="relative pt-[45px] pb-[40px]">
                      <div>
                        <figure>
                          <img src={Assets.ourworks1} alt="img" />
                        </figure>
                      </div>
                      <div className="absolute top-0 right-[5%]">
                        <img src={Assets.ovalImg} alt="img" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-25 font-light leading-[30px] pb-[25px]">
                        Brenna & Fadell Wedding <br />
                        <span className="text-19 font-light ">
                          –<em>Australian Botanic Garden</em>
                        </span>
                      </h5>
                      <p className="text-18 leading-[30px] pb-[40px]">
                        Embark on a journey of love as Brenna and Fadell changed
                        vows in their white wedding at the Australian Botanic is
                        a Garden, Mount Annan.
                      </p>
                    </div>
                    <div className="flex flex-col gap-[15px] pb-[35px]">
                      <Button variant="secondary" classNames={"!h-[49px] !text-18"}>
                        MORE DETAILES
                      </Button>
                      <Button variant="primary" classNames={"!h-[49px] !text-18"}>
                        VIEW ALL WORKS
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="relative pt-[45px] pb-[40px]">
                      <div>
                        <figure>
                          <img src={Assets.ourworks1} alt="img" />
                        </figure>
                      </div>
                      <div className="absolute top-0 right-[5%]">
                        <img src={Assets.ovalImg} alt="img" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-25 font-light leading-[30px] pb-[25px]">
                        Brenna & Fadell Wedding <br />
                        <span className="text-19 font-light ">
                          –<em>Australian Botanic Garden</em>
                        </span>
                      </h5>
                      <p className="text-18 leading-[30px] pb-[40px]">
                        Embark on a journey of love as Brenna and Fadell changed
                        vows in their white wedding at the Australian Botanic is
                        a Garden, Mount Annan.
                      </p>
                    </div>
                    <div className="flex flex-col gap-[15px] pb-[35px]">
                      <Button variant="secondary" classNames={"!h-[49px] !text-18"}>
                        MORE DETAILES
                      </Button>
                      <Button variant="primary" classNames={"!h-[49px] !text-18"}>
                        VIEW ALL WORKS
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="relative pt-[45px] pb-[40px]">
                      <div>
                        <figure>
                          <img src={Assets.ourworks1} alt="img" />
                        </figure>
                      </div>
                      <div className="absolute top-0 right-[5%]">
                        <img src={Assets.ovalImg} alt="img" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-25 font-light leading-[30px] pb-[25px]">
                        Brenna & Fadell Wedding <br />
                        <span className="text-19 font-light ">
                          –<em>Australian Botanic Garden</em>
                        </span>
                      </h5>
                      <p className="text-18 leading-[30px] pb-[40px]">
                        Embark on a journey of love as Brenna and Fadell changed
                        vows in their white wedding at the Australian Botanic is
                        a Garden, Mount Annan.
                      </p>
                    </div>
                    <div className="flex flex-col gap-[15px] pb-[35px]">
                      <Button variant="secondary" classNames={"!h-[49px] !text-18"}>
                        MORE DETAILES
                      </Button>
                      <Button variant="primary" classNames={"!h-[49px] !text-18"}>
                        VIEW ALL WORKS
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div>
          <figure>
            <video              
              src="https://dev.uiwac.webc.in/juniors-2023/christo/lession1/symphony/images/demo-video.mp4"
              autoPlay
              loop
              muted
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
