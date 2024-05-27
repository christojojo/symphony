
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Assets from "../../common/Assets";
import Button from "../Button/Button";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function EventDesign() {
  const boxRef = useRef(null);

  useGSAP(() => {
    const mediaQuery = window.matchMedia("(min-width: 1399px)"); 
    if (mediaQuery.matches) {
      const context = gsap.context(() => {
        ScrollTrigger.create({
          trigger: boxRef.current,
          start: "top 130px",
          end: "bottom bottom",
          pin: true,
          scrub: true,
          // markers: true,
          onEnter: () => {
            gsap.to(".move-left1", { x: -300, duration: 2 });
            gsap.to(".move-left2", { x: -430, duration: 2 });
            gsap.to(".move-right1", { x: 430, duration: 2 });
            gsap.to(".move-right2", { x: 300, duration: 2 });
            gsap.to(".centerCouple-img", {scale: 1.2 ,duration: 1.5});
            
          },
          onEnterBack: () => {
            gsap.to(".move-left1", { x: 0, duration: 2 });
            gsap.to(".move-left2", { x: 0, duration: 2 });
            gsap.to(".move-right1", { x: 0, duration: 2 });
            gsap.to(".move-right2", { x: 0, duration: 2 });
            gsap.to(".centerCouple-img", {scale: 1 ,duration: 1.5 });

          },
        });
      }, boxRef);

      return () => context.revert();
    }
  }, [boxRef]);

  const data = [
    {
      title: "Event Design For the Romance",
      description: "LET`S CELEBRATE",
      content:
        "Our team values the significance of this journey. This is an opportunity to unite families, define legacies, and what better reason to dust off the vintage champagne?",
      buttonText: "Enquire Now",
      buttonVariant: "primary",
    },
  ];

  return (
    <div
      className="py-[60px] md:py-[110px] 3xl:py-[110px] font-forum bg-white"
      ref={boxRef}
    >
      <div className="container mx-auto">
        {data.map((item, index) => (
          <div className="flex flex-col justify-center items-center" key={index}>
            <div className="relative max-w-[225px] md:max-w-[383px] 3xl:max-w-[383px] w-full mx-auto mb-[37px] md:mb-[109px] 3xl:mb-[109px] ">
              <figure className="relative overflow-hidden rounded-tl-[268px] rounded-tr-[268px] bg-slate-100 pb-[129.05%] z-50 ">
                <img
                  src={Assets.eventDesign}
                  alt="A couple celebrating at an event"
                  className="absolute w-full h-full top-0 left-0 object-cover centerCouple-img"
                />
              </figure>

              <div className="animation-images absolute bottom-0 left-0 w-full ">
                <div className="relative">
                  <div className="move-left1 absolute bottom-[70px] left-2 hidden md:block z-10">
                    <figure>
                      <img src={Assets.eventDesignimg2} alt="img" />
                    </figure>
                  </div>

                  <div className="move-left2 absolute bottom-0 left-2 hidden md:block">
                    <figure>
                      <img src={Assets.eventDesignimg3} alt="img" />
                    </figure>
                  </div>

                  <div className="move-right1 absolute bottom-0 right-2 hidden md:block">
                    <figure>
                      <img src={Assets.eventDesignimg4} alt="img" />
                    </figure>
                  </div>

                  <div className="move-right2 absolute bottom-[70px] right-2 hidden md:block z-10">
                    <figure>
                      <img src={Assets.eventDesignimg1} alt="img" />
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
                {item.title}
              </h2>
              <div className="text-18 leading-[19px] pb-[50px] md:pb-[30px] 3xl:pb-[30px] text-center">
                {item.description}
              </div>
            </div>
            <p className="text-20 md:text-[23px] 3xl:text-[23px] leading-[30px] md:leading-[35px] 3xl:leading-[35px] pb-[40px] md:pb-[66px] 3xl:pb-[66px] max-w-[685px] text-center">
              {item.content}
            </p>
            <Button variant={item.buttonVariant} classNames={"w-full md:max-w-[170px] !h-[49px]"}>
              {item.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDesign;
