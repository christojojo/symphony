import React, { useState } from "react";

import Assets from "../../common/Assets";
function Banner() {

  return (
    <section className="relative h-banner-height mt-[66px] lg:mt-20">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://dev.uiwac.webc.in/juniors-2023/christo/lession1/symphony/images/bnr2.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center py-32">
        <div className="text-center text-white">
          <h1 className="text-50 md:text-50 3xl:text-h1 lg:text-h1 font-light max-w-[274px] md:max-w-[728px] 3xl:max-w-[720px] leading-[61px] md:leading-[91px] 3xl:leading-[91px]">
            TELLING THE STORY OF YOUR LOVE
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Banner;

