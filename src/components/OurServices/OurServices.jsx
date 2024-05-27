import React from "react";
import WeddingDecorations from "../WeddingDecorations/WeddingDecorations";
import WeddingPlanning from "../WeddingPlanning/WeddingPlanning";
import EventPlanning from "../EventPlanning/EventPlanning";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import Button from "../Button/Button";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const OurServices = () => {
  const servicesData = [
    {
      title: "WEDDING DECORATIONS",
      description:
        "Our team values the significance of this journey. This is an opportunity to unite families, define legacies and what better a reason to dust off the vintage champagne?",
      links: [
        { text: "Event Planner Sydney", url: "#" },
        { text: "Personalised Wedding Planning", url: "#" },
        { text: "Budget Wedding Planning", url: "#" },
      ],
    },
    {
      title: "WEDDING PLANNING",
      description:
        "Our team values the significance of this journey. This is an opportunity to unite families, define legacies and what better a reason to dust off the vintage champagne?",
      links: [
        { text: "Event Planner Sydney", url: "#" },
        { text: "Personalised Wedding Planning", url: "#" },
        { text: "Budget Wedding Planning", url: "#" },
      ],
    },
    {
      title: "EVENT DECOR PLANNING",
      description:
        "Our team values the significance of this journey. This is an opportunity to unite families, define legacies and what better a reason to dust off the vintage champagne?",
      links: [
        { text: "Event Planner Sydney", url: "#" },
        { text: "Personalised Wedding Planning", url: "#" },
        { text: "Budget Wedding Planning", url: "#" },
      ],
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <WeddingDecorations />
        <WeddingPlanning />
        <EventPlanning />
      </div>
      <div className="services-container bg-ourServices py-[60px] block md:hidden">
        <div className="container">
          <span className="block text-16 pb-3 leading-[18px]">
            Our Services
          </span>
          <Swiper
           pagination={{
            type: 'fraction',
          }}
            modules={[Scrollbar, Pagination]}
            className="our-service"
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index}>
                <h4 className="font-Silk text-40 font-extralight pb-[28px] leading-[50px]">
                  {service.title}
                </h4>
                <p className="text-18 leading-[30px] pb-[40px]">
                  {service.description}
                </p>
                <ul className="flex flex-col *:text-22 *:leading-[24px] *:pb-[27px]">
                  {service.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
                <div className="mt-[15px] pb-[47px]">
                  <Button
                    variant="tertiary"
                    classNames={"!text-18 !leading-[19px] !h-[49px]"}
                  >
                    KNOW MORE
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurServices;
