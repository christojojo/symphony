import React from "react";
import Assets from "../../common/Assets";
import Button from "../Button/Button";
import "./EventPlanning.css";

const EventPlanning = () => {
  return (
    <div className="bg-ourServices mt-5">
      <div className="flex gap-[50px] md:gap-[50px] 3xl:gap-[155px] ">
        <div className="basis-[45%] hidden xl:table 3xl:table">
          <div className="max-w-[814px]">
            <figure className="relative pb-[119%]">
              <img
                src={Assets.eventPlanning}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </figure>
          </div>
        </div>
        <div className="md:basis-full xl:basis-[55%] 3xl:basis-[55%] p-[80px] xl:py-[30px] xl:px-0 3xl:py-[100px] flex flex-col justify-center">
          <div className="md:text-center xl:text-left 3xl:text-left">
            <span className="block text-18 leading-[19px] pb-[25px]">
              OUR SERVICES
            </span>
            <h4 className="text-h4 xl:text-45 2xl:text-h4 3xl:text-h4 leading-[55px] md:leading-[65px] 2xl:leading-[65px] 3xl:leading-[65px] max-w-[508px] pb-[30px] xl:pb-[30px] 2xl:pb-[55px] 3xl:pb-[55px] font-Cormorant md:mx-auto xl:mx-0">
              EVENT DECOR PLANNING
            </h4>
            <ul className="evnt-planing *:text-22 2xl:*:text-26 3xl:*:text-26 *:leading-[28px] *:pb-[20px] xl:*:pb-[20px] 2xl:*:pb-[33px] 3xl:*:pb-[33px] *:text-ourSection pb-[30px] xl:pb-0 2xl:pb-[30px] 3xl:pb-[30px] *:w-full">
              <li>
                <a href="#" className="hover-underline">
                  Event Planner Sydney
                </a>
                <div className="absolute right-[8%] top-[-100%] hidden 2xl:block">
                  <img src={Assets.sliderImg1} alt="img" width={200} />
                </div>
              </li>
              <li>
                <a href="#" className="hover-underline">
                  Personalised Wedding Planning
                </a>
                <div className="absolute right-[8%] top-[-100%] hidden 2xl:block">
                  <img src={Assets.sliderImg1} alt="img" width={200} />
                </div>
              </li>
              <li>
                <a href="#" className="hover-underline">
                  Budget Wedding Planning
                </a>
                <div className="absolute right-[8%] top-[-100%] hidden 2xl:block">
                  <img src={Assets.sliderImg1} alt="img" width={200} />
                </div>
              </li>
              <li>
                <a href="#" className="hover-underline">
                  Event Planner Sydney
                </a>
                <div className="absolute right-[8%] top-[-100%] hidden 2xl:block">
                  <img src={Assets.sliderImg1} alt="img" width={200} />
                </div>
              </li>
            </ul>
          </div>

          <div className="md:mx-auto xl:mx-0 ">
            <Button variant="tertiary" classNames={"h-[49px]"}>
              Know More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPlanning;
