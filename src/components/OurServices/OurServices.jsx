import React from "react";
import WeddingDecorations from "../WeddingDecorations/WeddingDecorations";
import WeddingPlanning from "../WeddingPlanning/WeddingPlanning";
import EventPlanning from "../EventPlanning/EventPlanning";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import Button from "../Button/Button";

const OurServices = () => {
  return (
    <>
      <div className="hidden md:block">
        <WeddingDecorations></WeddingDecorations>
        <WeddingPlanning></WeddingPlanning>
        <EventPlanning></EventPlanning>
      </div>
      <div className="ourservice-responsive bg-ourServices py-[60px] block md:hidden">
        <div className="container">
          <span className="block text-16 pb-3 leading-[18px]">
            Our Services
          </span>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="our-service"
          >
            <SwiperSlide>
              <h4 className="font-Silk text-40 font-extralight pb-[28px] leading-[50px]">
                WEDDING DECORATIONS
              </h4>
              <p className="text-18 leading-[30px] pb-[40px]">
                Our team values the significance of this journey. This is an
                opportunity to unite families, define legacies and what better a
                reason to dust off the vintage champagne?
              </p>
              <ul className="flex flex-col *:text-22 *:leading-[24px] *:pb-[27px]">
                <li>
                  <a href="#">Event Planner Sydney</a>
                </li>
                <li>
                  <a href="#">Personalised Wedding Planning</a>
                </li>
                <li>
                  <a href="#">Budget Wedding Planning</a>
                </li>
              </ul>
              <div className="mt-[15px] pb-[47px]">
                <Button
                  variant="tertiary"
                  classNames={"!text-18 !leading-[19px]"}
                >
                  KNOW MORE
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className="font-Silk text-40 font-extralight pb-[28px] leading-[50px]">
                WEDDING PLANNING
              </h4>
              <p className="text-18 leading-[30px] pb-[40px]">
                Our team values the significance of this journey. This is an
                opportunity to unite families, define legacies and what better a
                reason to dust off the vintage champagne?
              </p>
              <ul className="flex flex-col *:text-22 *:leading-[24px] *:pb-[27px]">
                <li>
                  <a href="#">Event Planner Sydney</a>
                </li>
                <li>
                  <a href="#">Personalised Wedding Planning</a>
                </li>
                <li>
                  <a href="#">Budget Wedding Planning</a>
                </li>
              </ul>
              <div className="mt-[15px] pb-[47px]">
                <Button
                  variant="tertiary"
                  classNames={"!text-18 !leading-[19px]"}
                >
                  KNOW MORE
                </Button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className="font-Silk text-40 font-extralight pb-[28px] leading-[50px]">
                EVENT DECOR PLANNING
              </h4>
              <p className="text-18 leading-[30px] pb-[40px]">
                Our team values the significance of this journey. This is an
                opportunity to unite families, define legacies and what better a
                reason to dust off the vintage champagne?
              </p>
              <ul className="flex flex-col *:text-22 *:leading-[24px] *:pb-[27px]">
                <li>
                  <a href="#">Event Planner Sydney</a>
                </li>
                <li>
                  <a href="#">Personalised Wedding Planning</a>
                </li>
                <li>
                  <a href="#">Budget Wedding Planning</a>
                </li>
              </ul>
              <div className="mt-[15px] pb-[47px]">
                <Button
                  variant="tertiary"
                  classNames={"!text-18 !leading-[19px]"}
                >
                  KNOW MORE
                </Button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurServices;
