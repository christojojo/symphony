import React from "react";
import Assets from "../../common/Assets";
import Button from "../Button/Button";

const WeddingPlanning = () => {
  return (
      <div className="bg-ourServices mt-5">
        <div className="flex gap-[155px]">
          <div className="basis-[45%]">
            <div className="max-w-[814px]">
              <figure className="relative pb-[119%]">
                <img
                  src={Assets.weddingPlanning}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              </figure>
            </div>
          </div>
          <div className="basis-[55%] py-[50px] flex flex-col justify-center">
            <span className="block text-18 leading-[19px] pb-[25px]">
              Our Services
            </span>
            <h4 className="text-h4 leading-[65px] max-w-[418px] pb-[55px]">
              Wedding Range of Planning
            </h4>
            <ul className="*:text-26 *:leading-[28px] *:pb-[33px] *:text-ourSection pb-[30px]">
              <li>
                <a href="#">Event Planner Sydney</a>
              </li>
              <li>
                <a href="#">Personalised Wedding Planning</a>{" "}
              </li>
              <li>
                <a href="#">Budget Wedding Planning</a>
              </li>
              <li>
                <a href="#">Event Planner Sydney</a>{" "}
              </li>
            </ul>
            <div>
              <Button variant="tertiary">Know more</Button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default WeddingPlanning;
