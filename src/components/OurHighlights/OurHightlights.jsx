import React from "react";

const OurHightlights = () => {
  return (
    <div className="bg-white font-Cormorant">
        <div className="pt-[69px] pb-[178px]">
        <div className="container">
          <span className="block text-18 leading-[19px] pb-[77px] font-forum">
            Our Highlight
          </span>
          <div className="flex justify-between border-b border-black py-[34px]">
            <div className="text-h2 "><a href="#" className="font-light">Wedding Styling</a></div>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-33">arrow_right_alt</span>
            </div>
          </div>
          <div className="flex justify-between border-b border-black py-[34px]">
            <div className="text-h2 font-light"><a href="#">Indian Wedding</a></div>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-33">arrow_right_alt</span>
            </div>
          </div>
          <div className="flex justify-between border-b border-black py-[34px]">
            <div className="text-h2 font-light"><a href="#"> Wedding Decoration</a></div>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-33">arrow_right_alt</span>
            </div>
          </div>
          <div className="flex justify-between border-b border-black py-[34px]">
            <div className="text-h2 font-light"><a href="#">Wedding Reception</a> </div>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-33">arrow_right_alt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHightlights;
