import React, { useEffect, useLayoutEffect, useRef } from "react";
import Assets from "../../common/Assets";
import Button from "../Button/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function EventDesign() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(".move-left1", { x: -300, delay: 1 });
    gsap.to(".move-left2", { x: -430, delay: 1 });
    gsap.to(".move-right1", { x: 430, delay: 1 });
    gsap.to(".move-right2", { x: 300, delay: 1 });
  }, []);



  return (
    <div className="py-[60px] md:py-[110px] 3xl:py-[110px] font-forum bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center" ref={boxRef}>
          <div className="relative max-w-[225px] md:max-w-[383px] 3xl:max-w-[383px] w-full mx-auto mb-[37px] md:mb-[109px] 3xl:mb-[109px] ">
            <figure className="relative overflow-hidden rounded-tl-[268px] rounded-tr-[268px] bg-slate-100 pb-[129.05%] z-50">
              <img
                src={Assets.eventDesign}
                alt="A couple celebrating at an event"
                className="absolute w-full h-full top-0 left-0 object-cover"
              />
            </figure>

            <div className="animation-images absolute bottom-0 left-0 w-full">
              <div className="relative">
                <div className="move-left1 absolute bottom-[50px] left-0 z-10">
                  <figure>
                    <img src={Assets.eventDesignimg2} alt="#" />
                  </figure>
                </div>

                <div className="move-left2 absolute bottom-0 left-0">
                  <figure>
                    <img src={Assets.eventDesignimg3} alt="#" />
                  </figure>
                </div>

                <div className="move-right1 absolute bottom-0 right-0">
                  <figure>
                    <img src={Assets.eventDesignimg4} alt="#" />
                  </figure>
                </div>

                <div className="move-right2 absolute bottom-[50px] right-0 z-10">
                  <figure>
                    <img src={Assets.eventDesignimg1} alt="#" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-col-reverse 3xl:flex-col-reverse">
            <h2
              className="text-[35px] uppercase md:text-h4 xl:text-h4 3xl:text-h2 font-Silk md:font-Cormorant 3xl:font-Cormorant font-extralight md:font-normal 3xl:font-normal 
          leading-[43px] md:leading-[87px] 3xl:leading-[87px] max-w-[474px] md:max-w-[710px] text-center pb-[37px] md:pb-[60px] 3xl:pb-[60px]"
            >
              Event Design For the Romance
            </h2>
            <div className="text-18 leading-[19px] pb-[50px] md:pb-[30px] 3xl:pb-[30px] text-center">
              LET`S CELEBRATE
            </div>
          </div>
          <p className="text-20 md:text-[23px] 3xl:text-[23px] leading-[30px] md:leading-[35px] 3xl:leading-[35px] pb-[40px] md:pb-[66px] 3xl:pb-[66px] max-w-[685px] text-center">
            Our team values the significance of this journey. This is an
            opportunity to unite families, define legacies, and what better
            reason to dust off the vintage champagne?
          </p>
          <Button variant="primary" classNames={"w-full md:max-w-[170px]"}>
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EventDesign;
