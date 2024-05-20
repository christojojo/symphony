import React from "react";
import Assets from "../../common/Assets";

const highlightsData = [
  {
    title: "Wedding Styling",
    image: Assets.eventDesignimg1,
  },
  {
    title: "Indian Wedding",
    image: Assets.eventDesignimg2,
  },
  {
    title: "Wedding Decoration",
    image: Assets.eventDesignimg1,
  },
  {
    title: "Wedding Reception",
    image: Assets.eventDesignimg2,
  },
];

const OurHightlights = () => {
  return (
    <div className="bg-white font-Cormorant">
      <div className="py-[60px] 3xl:pt-[69px] 3xl:pb-[178px]">
        <div className="container">
          <div>
            <span className="block text-16 md:text-18 leading-[18px] pb-[27px]">
              OUR HIGHLIGHTS
            </span>
            <div>
              {highlightsData.map((highlight, index) => (
                <div
                  key={index}
                  className="relative flex justify-between border-b border-black pb-[10px] md:py-[34px] 3xl:py-[34px] mb-[22px] md:mb-[0px] 3xl:mb-0 group md:hover:bg-highlightsHover hover:px-10 transition-all ease-in-out duration-300"
                >
                  <div className="">
                    <a
                      href="#"
                      className="font-light font-Silk md:font-Cormorant 3xl:font-Cormorant text-30 md:text-h5 xl:text-h2 3xl:text-h2 group-hover:font-normal whitespace-nowrap"
                    >
                      {highlight.title}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className=" bg-white h-[60px] w-[60px] rounded-full flex justify-center items-center">
                      <span className="material-symbols-outlined text-33">
                        arrow_right_alt
                      </span>
                    </div>
                  </div>
                  <div className="hidden lg:block 3xl:block absolute top-[-25%] left-[55%] md:left-[55%] xl:left-[64%] 3xl:left-[55%] -rotate-45 opacity-0 group-hover:rotate-0 group-hover:opacity-100 transition-all ease-in-out duration-300 scale-50 group-hover:scale-100">
                    <figure>
                      <img src={highlight.image} alt="img" />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHightlights;
